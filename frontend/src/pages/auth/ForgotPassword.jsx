import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

// Components
import Button from '../../components/ui/Button';
import {
  FormGroup,
  FormLabel,
  FormInput,
  ErrorMessage,
  LoadingSpinner
} from '../../components/ui/FormComponents';

// Context
import { AuthContext } from '../../context/AuthContext';

// Utils
import { getImageUrl } from '../../utils/imageUtils';

const ForgotPassword = () => {
  const { forgotPassword, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    try {
      await forgotPassword(email);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || 'Failed to send reset email. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    // Clear error when user starts typing
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  const renderContent = () => {
    if (isSubmitted) {
      return (
        <ContentContainer>
          <IconContainer $status="success">
            <FaCheckCircle />
          </IconContainer>
          <Title>Check Your Email</Title>
          <Description>
            We've sent a password reset link to:
          </Description>
          <EmailDisplay>{email}</EmailDisplay>
          <Description>
            Click the link in your email to reset your password.
            If you don't see the email, check your spam folder.
          </Description>
          <ButtonGroup>
            <ActionButton
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              size="large"
            >
              Send Another Email
            </ActionButton>
            <ActionButton
              as={Link}
              to="/auth/login"
              variant="accent"
              size="large"
            >
              Back to Login
            </ActionButton>
          </ButtonGroup>
        </ContentContainer>
      );
    }

    return (
      <ContentContainer>
        <IconContainer $status="info">
          <FaEnvelope />
        </IconContainer>
        <Title>Forgot Your Password?</Title>
        <Description>
          No worries! Enter your email address and we'll send you a link to reset your password.
        </Description>

        <Form onSubmit={handleSubmit}>
          {submitError && (
            <ErrorMessage>{submitError}</ErrorMessage>
          )}

          <FormGroup error={errors.email}>
            <FormLabel htmlFor="email" required>
              Email Address
            </FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
              error={errors.email}
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            variant="accent"
            size="large"
            disabled={loading}
            fullWidth
          >
            {loading ? <LoadingSpinner size="sm" /> : 'Send Reset Link'}
          </SubmitButton>
        </Form>

        <BackToLogin>
          <FaArrowLeft />
          <Link to="/auth/login">Back to Login</Link>
        </BackToLogin>
      </ContentContainer>
    );
  };

  return (
    <AuthPageContainer>
      {/* Desktop Layout */}
      <DesktopLayout>
        {/* Left Side - Content */}
        <ContentSide>
          <ContentWrapper>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderContent()}
            </motion.div>
          </ContentWrapper>
        </ContentSide>

        {/* Right Side - Branding */}
        <BrandingSide backgroundImage={getImageUrl('/assets/images/auth-bg.jpg', 1920, 1080)}>
          <BrandingOverlay />
          <BrandingContent>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BrandingLogo>
                <img src={getImageUrl('/assets/images/logo-symbol.png', 200, 80)} alt="Vaikunth Yoga Retreat" />
              </BrandingLogo>
              <BrandingTitle>Reset Your Password</BrandingTitle>
              <BrandingSubtitle>Continue Your Journey</BrandingSubtitle>
              <BrandingText>
                Don't let a forgotten password stop your spiritual journey.
                We're here to help you get back to your practice and continue growing with our community.
              </BrandingText>
            </motion.div>
          </BrandingContent>
        </BrandingSide>
      </DesktopLayout>

      {/* Mobile Layout */}
      <MobileLayout backgroundImage={getImageUrl('/assets/images/auth-bg.jpg', 1920, 1080)}>
        <MobileOverlay />
        <MobileContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MobileLogo>
              <img src={getImageUrl('/assets/images/logo.png', 200, 80)} alt="Vaikunth Yoga Retreat" />
            </MobileLogo>

            <MobileCard>
              {renderContent()}
            </MobileCard>
          </motion.div>
        </MobileContainer>
      </MobileLayout>
    </AuthPageContainer>
  );
};

// Styled Components
const AuthPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const DesktopLayout = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const ContentSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing[8]};
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  text-align: center;
`;

const BrandingSide = styled.div`
  flex: 1;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(42, 93, 69, 0.85) 0%, rgba(164, 197, 214, 0.85) 100%);
  z-index: 1;
`;

const BrandingContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[8]};
  max-width: 500px;
`;

const BrandingLogo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  margin-left: 130px;

  img {
    width: 180px;
    height: auto;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`;

const BrandingTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const BrandingSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const BrandingText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const MobileLayout = styled.div`
  display: none;
  min-height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1;
`;

const MobileContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const MobileLogo = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  img {
    width: 150px;
    height: auto;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const MobileCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  ${({ $status, theme }) => {
    switch ($status) {
      case 'success':
        return `
          background: ${theme.colors.green[100]};
          color: ${theme.colors.green[600]};
        `;
      case 'error':
        return `
          background: ${theme.colors.red[100]};
          color: ${theme.colors.red[600]};
        `;
      default:
        return `
          background: ${theme.colors.blue[100]};
          color: ${theme.colors.blue[600]};
        `;
    }
  }}
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const EmailDisplay = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accent}10;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.accent}20;
  margin: ${({ theme }) => theme.spacing[4]} 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin: ${({ theme }) => theme.spacing[6]} 0;
`;

const SubmitButton = styled(Button)`
  min-height: 56px;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 48px;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const ActionButton = styled(Button)`
  min-height: 56px;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 48px;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;

    ${ActionButton} {
      flex: 1;
      max-width: 200px;
    }
  }
`;

const BackToLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

export default ForgotPassword;
