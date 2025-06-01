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
  FormSelect,
  FormCheckbox,
  FormRow,
  ErrorMessage,
  LoadingSpinner
} from '../../components/ui/FormComponents';

// Context
import { AuthContext } from '../../context/AuthContext';

// Utils
import { getImageUrl } from '../../utils/imageUtils';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, loading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    yogaExperience: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const yogaExperienceLevels = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' },
    { value: 'teacher', label: 'Yoga Teacher' }
  ];

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

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Date of birth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 16) {
        newErrors.dateOfBirth = 'You must be at least 16 years old';
      }
    }

    // Yoga experience validation
    if (!formData.yogaExperience) {
      newErrors.yogaExperience = 'Please select your yoga experience level';
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
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
      const userData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        yogaExperience: formData.yogaExperience,
        subscribeNewsletter: formData.subscribeNewsletter
      };

      const result = await register(userData);
      navigate('/auth/verify-email', {
        state: {
          email: formData.email,
          isDevelopmentMode: result.isDevelopmentMode,
          devOTP: result.devOTP
        }
      });
    } catch (error) {
      setSubmitError(error.message || 'Registration failed. Please try again.');
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Register with ${provider}`);
  };

  return (
    <AuthPageContainer>
      {/* Desktop Layout */}
      <DesktopLayout>
        {/* Left Side - Branding */}
        <BrandingSide backgroundImage={getImageUrl('/assets/images/auli2.jpg', 1920, 1080)}>
          <BrandingOverlay />
          <BrandingContent>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BrandingLogo>
                <img src={getImageUrl('/assets/images/logo-symbol.png', 200, 80)} alt="Vaikunth Yoga Retreat" />
              </BrandingLogo>
              <BrandingTitle>Join Our Community</BrandingTitle>
              <BrandingSubtitle>Begin Your Transformation Journey</BrandingSubtitle>
              <BrandingText>
                Connect with like-minded souls and embark on a journey of self-discovery.
                Experience authentic yoga practices, mindful living, and spiritual growth in the heart of the Himalayas.
              </BrandingText>
            </motion.div>
          </BrandingContent>
        </BrandingSide>

        {/* Right Side - Form */}
        <FormSide>
          <FormContainer>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AuthHeader>
                {/* <h1>Join Our Community</h1>
                <p>Create your account</p> */}
              </AuthHeader>

              <AuthForm onSubmit={handleSubmit}>
                {submitError && (
                  <ErrorMessage>{submitError}</ErrorMessage>
                )}

                <FormRow>
                  <FormGroup error={errors.firstName}>
                    <FormLabel htmlFor="firstName" required>
                      First Name
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      error={errors.firstName}
                    />
                  </FormGroup>

                  <FormGroup error={errors.lastName}>
                    <FormLabel htmlFor="lastName" required>
                      Last Name
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      error={errors.lastName}
                    />
                  </FormGroup>
                </FormRow>

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

                <FormRow>
                  <FormGroup error={errors.password}>
                    <FormLabel htmlFor="password" required>
                      Password
                    </FormLabel>
                    <PasswordInput
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      error={errors.password}
                    />
                  </FormGroup>

                  <FormGroup error={errors.confirmPassword}>
                    <FormLabel htmlFor="confirmPassword" required>
                      Confirm Password
                    </FormLabel>
                    <PasswordInput
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      error={errors.confirmPassword}
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup error={errors.phone}>
                    <FormLabel htmlFor="phone" required>
                      Phone Number
                    </FormLabel>
                    <FormInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      error={errors.phone}
                    />
                  </FormGroup>

                  <FormGroup error={errors.dateOfBirth}>
                    <FormLabel htmlFor="dateOfBirth" required>
                      Date of Birth
                    </FormLabel>
                    <FormInput
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      error={errors.dateOfBirth}
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup error={errors.yogaExperience}>
                  <FormLabel htmlFor="yogaExperience" required>
                    Yoga Experience Level
                  </FormLabel>
                  <FormSelect
                    id="yogaExperience"
                    name="yogaExperience"
                    value={formData.yogaExperience}
                    onChange={handleChange}
                    placeholder="Select your experience level"
                    error={errors.yogaExperience}
                  >
                    {yogaExperienceLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </FormSelect>
                </FormGroup>

                <CheckboxGroup>
                  <FormCheckbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    label={
                      <span>
                        I agree to the{' '}
                        <Link to="/terms" target="_blank">Terms of Service</Link>
                        {' '}and{' '}
                        <Link to="/privacy" target="_blank">Privacy Policy</Link>
                      </span>
                    }
                    error={errors.agreeToTerms}
                  />

                  <FormCheckbox
                    id="subscribeNewsletter"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleChange}
                    label="Subscribe to our newsletter for updates and special offers"
                  />
                </CheckboxGroup>

                <SubmitButton
                  type="submit"
                  variant="accent"
                  size="large"
                  disabled={loading}
                  fullWidth
                >
                  {loading ? <LoadingSpinner size="sm" /> : 'Create Account'}
                </SubmitButton>
              </AuthForm>
{/*
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
              </SocialButtons> */}

              <AuthFooter>
                <FooterText>
                  Already have an account?{' '}
                  <AuthLink to="/auth/login" state={{ from: location.state?.from }}>
                    Sign in
                  </AuthLink>
                </FooterText>
              </AuthFooter>
            </motion.div>
          </FormContainer>
        </FormSide>
      </DesktopLayout>

      {/* Mobile Layout */}
      <MobileLayout backgroundImage={getImageUrl('/assets/images/auli2.jpg', 1920, 1080)}>
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
                <h1>Join Our Community</h1>
                <p>Create your account</p>
              </AuthHeader>

              <AuthForm onSubmit={handleSubmit}>
                {submitError && (
                  <ErrorMessage>{submitError}</ErrorMessage>
                )}

                <FormRow>
                  <FormGroup error={errors.firstName}>
                    <FormLabel htmlFor="firstName" required>
                      First Name
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      error={errors.firstName}
                    />
                  </FormGroup>

                  <FormGroup error={errors.lastName}>
                    <FormLabel htmlFor="lastName" required>
                      Last Name
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      error={errors.lastName}
                    />
                  </FormGroup>
                </FormRow>

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

                <FormRow>
                  <FormGroup error={errors.password}>
                    <FormLabel htmlFor="password" required>
                      Password
                    </FormLabel>
                    <PasswordInput
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      error={errors.password}
                    />
                  </FormGroup>

                  <FormGroup error={errors.confirmPassword}>
                    <FormLabel htmlFor="confirmPassword" required>
                      Confirm Password
                    </FormLabel>
                    <PasswordInput
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      error={errors.confirmPassword}
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup error={errors.phone}>
                    <FormLabel htmlFor="phone" required>
                      Phone Number
                    </FormLabel>
                    <FormInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      error={errors.phone}
                    />
                  </FormGroup>

                  <FormGroup error={errors.dateOfBirth}>
                    <FormLabel htmlFor="dateOfBirth" required>
                      Date of Birth
                    </FormLabel>
                    <FormInput
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      error={errors.dateOfBirth}
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup error={errors.yogaExperience}>
                  <FormLabel htmlFor="yogaExperience" required>
                    Yoga Experience Level
                  </FormLabel>
                  <FormSelect
                    id="yogaExperience"
                    name="yogaExperience"
                    value={formData.yogaExperience}
                    onChange={handleChange}
                    placeholder="Select your experience level"
                    error={errors.yogaExperience}
                  >
                    {yogaExperienceLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </FormSelect>
                </FormGroup>

                <CheckboxGroup>
                  <FormCheckbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    label={
                      <span>
                        I agree to the{' '}
                        <Link to="/terms" target="_blank">Terms of Service</Link>
                        {' '}and{' '}
                        <Link to="/privacy" target="_blank">Privacy Policy</Link>
                      </span>
                    }
                    error={errors.agreeToTerms}
                  />

                  <FormCheckbox
                    id="subscribeNewsletter"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleChange}
                    label="Subscribe to our newsletter for updates and special offers"
                  />
                </CheckboxGroup>

                <SubmitButton
                  type="submit"
                  variant="accent"
                  size="large"
                  disabled={loading}
                  fullWidth
                >
                  {loading ? <LoadingSpinner size="sm" /> : 'Create Account'}
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
                  Already have an account?{' '}
                  <AuthLink to="/auth/login" state={{ from: location.state?.from }}>
                    Sign in
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
  padding: ${({ theme }) => theme.spacing[10]};
  overflow-y: auto;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 520px;
  padding: ${({ theme }) => theme.spacing[1]} 0;
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
  margin-bottom: ${({ theme }) => theme.spacing[1]};
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
    align-items: flex-start;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing[4]} 0;
    overflow-y: auto;
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
  max-width: 520px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[1]};
`;

const MobileLogo = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  margin-left: 120px;

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
    margin-bottom: ${({ theme }) => theme.spacing[1]};

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
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[2]} 0;

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[1]};
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
    margin-top: ${({ theme }) => theme.spacing[1]};
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[1]};
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

export default Register;
