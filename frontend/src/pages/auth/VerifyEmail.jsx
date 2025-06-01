import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle, FaEnvelope } from 'react-icons/fa';

// Components
import Button from '../../components/ui/Button';
import { LoadingSpinner } from '../../components/ui/FormComponents';
import OTPInput from '../../components/ui/OTPInput';

// Context
import { AuthContext } from '../../context/AuthContext';

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verifyEmailOTP, resendVerificationOTP, loading } = useContext(AuthContext);

  const [verificationStatus, setVerificationStatus] = useState('waiting'); // waiting, verifying, success, error
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  const [devOTP, setDevOTP] = useState(''); // For development mode

  useEffect(() => {
    // Get email from location state
    const emailFromState = location.state?.email;
    const isDevelopmentMode = location.state?.isDevelopmentMode;
    const devOTPFromState = location.state?.devOTP;

    if (emailFromState) {
      setEmail(emailFromState);

      // In development mode, show the OTP
      if (isDevelopmentMode && devOTPFromState) {
        setDevOTP(devOTPFromState);
        setMessage(`Development Mode: Your OTP is ${devOTPFromState}`);
      }
    } else {
      // If no email, redirect to login
      navigate('/auth/login');
    }
  }, [location.state, navigate]);

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleOTPChange = (value) => {
    setOtp(value);
    setOtpError('');
  };

  const handleOTPComplete = async (otpValue) => {
    if (otpValue.length === 6) {
      await handleVerification(otpValue);
    }
  };

  const handleVerification = async (otpValue) => {
    try {
      setVerificationStatus('verifying');
      setOtpError('');

      const response = await verifyEmailOTP(email, otpValue);
      setVerificationStatus('success');
      setMessage(response.message || 'Email verified successfully!');

      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/auth/login', {
          state: {
            message: 'Email verified successfully! You can now sign in.',
            email: email
          }
        });
      }, 3000);
    } catch (error) {
      setVerificationStatus('error');
      setOtpError(error.message || 'Invalid or expired verification code');
      setOtp(''); // Clear OTP on error
    }
  };

  const handleResendOTP = async () => {
    try {
      await resendVerificationOTP(email);
      setResendCooldown(60); // 60 second cooldown
      setMessage('Verification code sent successfully!');
      setOtpError('');
    } catch (error) {
      setOtpError(error.message || 'Failed to resend verification code');
    }
  };

  const handleManualVerify = () => {
    if (otp.length === 6) {
      handleVerification(otp);
    } else {
      setOtpError('Please enter a valid 6-digit verification code');
    }
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case 'verifying':
        return (
          <div className="content">
            <div className="icon verifying">
              <LoadingSpinner />
            </div>
            <h1>Verifying Code</h1>
            <p>Please wait while we verify your code...</p>
          </div>
        );

      case 'success':
        return (
          <div className="content">
            <div className="icon success">
              <FaCheckCircle />
            </div>
            <h1>Email Verified Successfully!</h1>
            <p>{message}</p>
            <p>You will be redirected to the login page in a few seconds.</p>
            <Button
              as={Link}
              to="/auth/login"
              variant="accent"
              size="large"
            >
              Continue to Login
            </Button>
          </div>
        );

      default: // waiting or error
        return (
          <div className="content">
            <div className="icon info">
              <FaEnvelope />
            </div>
            <h1>Verify Your Email</h1>
            <p>We've sent a 6-digit verification code to:</p>
            <div className="email-display">{email}</div>
            <p>Enter the code below to verify your account:</p>

            {devOTP && (
              <div className="dev-otp-display">
                <strong>Development Mode:</strong> Your OTP is <span className="otp-code">{devOTP}</span>
              </div>
            )}

            <div className="otp-section">
              <OTPInput
                length={6}
                value={otp}
                onChange={handleOTPChange}
                onComplete={handleOTPComplete}
                error={!!otpError}
                disabled={loading || verificationStatus === 'verifying'}
                autoFocus
              />

              {otpError && (
                <div className="error-message">
                  <FaTimesCircle />
                  {otpError}
                </div>
              )}

              {message && !otpError && (
                <div className="success-message">
                  <FaCheckCircle />
                  {message}
                </div>
              )}
            </div>

            <div className="verify-section">
              <Button
                onClick={handleManualVerify}
                variant="accent"
                size="large"
                disabled={loading || verificationStatus === 'verifying' || otp.length !== 6}
                fullWidth
              >
                {loading || verificationStatus === 'verifying' ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  'Verify Code'
                )}
              </Button>
            </div>

            <div className="resend-section">
              <p>Didn't receive the code?</p>
              <Button
                onClick={handleResendOTP}
                variant="outline"
                size="large"
                disabled={resendCooldown > 0 || loading}
              >
                {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code'}
              </Button>
            </div>

            <div className="back-section">
              <Button
                as={Link}
                to="/auth/login"
                variant="ghost"
                size="large"
              >
                Back to Login
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <Container>
      <Card>
        {renderContent()}
      </Card>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing[1]};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[1]};
  }

  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing[2]};

    &.success {
      background: ${({ theme }) => theme.colors.green[100]};
      color: ${({ theme }) => theme.colors.green[600]};
    }

    &.error {
      background: ${({ theme }) => theme.colors.red[100]};
      color: ${({ theme }) => theme.colors.red[600]};
    }

    &.info {
      background: ${({ theme }) => theme.colors.blue[100]};
      color: ${({ theme }) => theme.colors.blue[600]};
    }

    &.verifying {
      background: ${({ theme }) => theme.colors.gray[100]};
      color: ${({ theme }) => theme.colors.gray[600]};
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
    margin: ${({ theme }) => theme.spacing[2]} 0;
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.gray[600]};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin: ${({ theme }) => theme.spacing[2]} 0;
  }

  .email-display {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent}10;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[1]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    border: 1px solid ${({ theme }) => theme.colors.accent}20;
    margin: ${({ theme }) => theme.spacing[1]} 0;
  }

  .dev-otp-display {
    background: ${({ theme }) => theme.colors.yellow[50]};
    border: 2px solid ${({ theme }) => theme.colors.yellow[300]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing[4]};
    margin: ${({ theme }) => theme.spacing[4]} 0;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.yellow[800]};

    .otp-code {
      font-family: 'Courier New', monospace;
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      background: ${({ theme }) => theme.colors.yellow[200]};
      padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      letter-spacing: 2px;
    }
  }

  .otp-section {
    margin: ${({ theme }) => theme.spacing[8]} 0;

    .error-message {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      color: ${({ theme }) => theme.colors.red[600]};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      margin-top: ${({ theme }) => theme.spacing[3]};
      justify-content: center;

      svg {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
      }
    }

    .success-message {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing[2]};
      color: ${({ theme }) => theme.colors.green[600]};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      margin-top: ${({ theme }) => theme.spacing[3]};
      justify-content: center;

      svg {
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
      }
    }
  }

  .verify-section {
    margin: ${({ theme }) => theme.spacing[2]} 0;
  }

  .resend-section {
    margin: ${({ theme }) => theme.spacing[6]} 0;
    text-align: center;

    p {
      margin-bottom: ${({ theme }) => theme.spacing[3]};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      color: ${({ theme }) => theme.colors.gray[600]};
    }
  }

  .back-section {
    margin-top: ${({ theme }) => theme.spacing[1]};
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[6]};
    margin: ${({ theme }) => theme.spacing[2]};

    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }

    p {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
    }
  }
`;

export default VerifyEmail;
