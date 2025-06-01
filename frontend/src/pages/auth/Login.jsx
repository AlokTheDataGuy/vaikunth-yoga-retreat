import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

// Components
import Button from '../../components/ui/Button';
import {
  FormGroup,
  FormLabel,
  FormInput,
  PasswordInput,
  FormCheckbox,
  ErrorMessage,
  SuccessMessage,
  LoadingSpinner
} from '../../components/ui/FormComponents';

// Context
import { AuthContext } from '../../context/AuthContext';

// Utils
import { getImageUrl } from '../../utils/imageUtils';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Get redirect path from location state
  const from = location.state?.from?.pathname || '/dashboard';

  // Check for success message from email verification
  React.useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      if (location.state?.email) {
        setFormData(prev => ({ ...prev, email: location.state.email }));
      }
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      await login(formData.email, formData.password, formData.rememberMe);
      navigate(from, { replace: true });
    } catch (error) {
      setSubmitError(error.message || 'Login failed. Please try again.');
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <AuthPageContainer>
      {/* Desktop Layout */}
      <DesktopLayout>
        {/* Left Side - Form */}
        <FormSide>
          <FormContainer>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AuthHeader>
                <h1>Welcome Back</h1>
                <p>Sign in to your account</p>
              </AuthHeader>

              <AuthForm onSubmit={handleSubmit}>
                {successMessage && (
                  <SuccessMessage>{successMessage}</SuccessMessage>
                )}
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    error={errors.email}
                  />
                </FormGroup>

                <FormGroup error={errors.password}>
                  <FormLabel htmlFor="password" required>
                    Password
                  </FormLabel>
                  <PasswordInput
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    error={errors.password}
                  />
                </FormGroup>

                <FormOptions>
                  <FormCheckbox
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    label="Remember me"
                  />
                  <ForgotPasswordLink to="/auth/forgot-password">
                    Forgot password?
                  </ForgotPasswordLink>
                </FormOptions>

                <SubmitButton
                  type="submit"
                  variant="accent"
                  size="large"
                  disabled={loading}
                  fullWidth
                >
                  {loading ? <LoadingSpinner size="sm" /> : 'Sign In'}
                </SubmitButton>
              </AuthForm>

              {/* <Divider>
                <DividerLine />
                <DividerText>or continue with</DividerText>
                <DividerLine />
              </Divider>

              <SocialButtons>
                <SocialButton
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  $provider="google"
                >
                  <FaGoogle />
                  Google
                </SocialButton>
                <SocialButton
                  type="button"
                  onClick={() => handleSocialLogin('facebook')}
                  $provider="facebook"
                >
                  <FaFacebook />
                  Facebook
                </SocialButton>
              </SocialButtons> */}

              <AuthFooter>
                <FooterText>
                  Don't have an account?{' '}
                  <AuthLink to="/auth/register" state={{ from: location.state?.from }}>
                    Sign up
                  </AuthLink>
                </FooterText>
              </AuthFooter>
            </motion.div>
          </FormContainer>
        </FormSide>

        {/* Right Side - Branding */}
        <BrandingSide backgroundImage={getImageUrl('/assets/images/auli1.jpg', 1920, 1080)}>
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
              <BrandingTitle>Welcome to Vaikunth </BrandingTitle>
              <BrandingSubtitle>Your Journey to Wholeness Begins Here</BrandingSubtitle>
              <BrandingText>
                Experience the transformative power of yoga in the serene Himalayan mountains.
                Join our community of seekers on a path to inner peace and spiritual awakening.
              </BrandingText>
            </motion.div>
          </BrandingContent>
        </BrandingSide>
      </DesktopLayout>

      {/* Mobile Layout */}
      <MobileLayout backgroundImage={getImageUrl('/assets/images/auli1.jpg', 1920, 1080)}>
        <MobileOverlay />
        <MobileContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MobileLogo>
              <img src={getImageUrl('/assets/images/logo-symbol.png', 200, 80)} alt="Vaikunth Yoga Retreat" />
            </MobileLogo>

            <MobileCard>
              <AuthHeader>
                <h1>Welcome Back</h1>
                <p>Sign in to your account</p>
              </AuthHeader>

              <AuthForm onSubmit={handleSubmit}>
                {successMessage && (
                  <SuccessMessage>{successMessage}</SuccessMessage>
                )}
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    error={errors.email}
                  />
                </FormGroup>

                <FormGroup error={errors.password}>
                  <FormLabel htmlFor="password" required>
                    Password
                  </FormLabel>
                  <PasswordInput
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    error={errors.password}
                  />
                </FormGroup>

                <FormOptions>
                  <FormCheckbox
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    label="Remember me"
                  />
                  <ForgotPasswordLink to="/auth/forgot-password">
                    Forgot password?
                  </ForgotPasswordLink>
                </FormOptions>

                <SubmitButton
                  type="submit"
                  variant="accent"
                  size="large"
                  disabled={loading}
                  fullWidth
                >
                  {loading ? <LoadingSpinner size="sm" /> : 'Sign In'}
                </SubmitButton>
              </AuthForm>

              <Divider>
                <DividerLine />
                <DividerText>or continue with</DividerText>
                <DividerLine />
              </Divider>

              <SocialButtons>
                <SocialButton
                  type="button"
                  onClick={() => handleSocialLogin('google')}
                  $provider="google"
                >
                  <FaGoogle />
                  Google
                </SocialButton>
                <SocialButton
                  type="button"
                  onClick={() => handleSocialLogin('facebook')}
                  $provider="facebook"
                >
                  <FaFacebook />
                  Facebook
                </SocialButton>
              </SocialButtons>

              <AuthFooter>
                <FooterText>
                  Don't have an account?{' '}
                  <AuthLink to="/auth/register" state={{ from: location.state?.from }}>
                    Sign up
                  </AuthLink>
                </FooterText>
              </AuthFooter>
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

const FormSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing[8]};
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 480px;
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
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
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
  margin-bottom: ${({ theme }) => theme.spacing[4]};
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
  margin-left: 100px;

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
`;

const AuthHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  p {
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};

    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }

    p {
      font-size: ${({ theme }) => theme.typography.fontSize.md};
    }
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing[1]} 0 ${({ theme }) => theme.spacing[2]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const ForgotPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  min-height: 56px;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.spacing[6]};
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    min-height: 48px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing[10]} 0 ${({ theme }) => theme.spacing[8]} 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => theme.spacing[8]} 0 ${({ theme }) => theme.spacing[6]} 0;
  }
`;

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(to right,
    transparent,
    ${({ theme }) => theme.colors.gray[300]},
    transparent);
`;

const DividerText = styled.span`
  padding: 0 ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background: ${({ theme }) => theme.colors.white};
`;

const SocialButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-height: 52px;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[300]};
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 20px;
    color: ${({ $provider, theme }) =>
      $provider === 'google' ? '#4285f4' :
      $provider === 'facebook' ? '#1877f2' :
      theme.colors.gray[600]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    min-height: 48px;

    svg {
      font-size: 18px;
    }
  }
`;

const AuthFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.spacing[6]};
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const AuthLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
