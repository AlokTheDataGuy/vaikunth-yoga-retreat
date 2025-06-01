import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaShieldAlt,
  FaCreditCard,
  FaLock,
  FaInfoCircle,
  FaExclamationTriangle,
  FaCalculator,
  FaGift,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import {
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  FormCheckbox,
  FormRow,
  FormSection,
  ErrorMessage,
  SuccessMessage,
  LoadingSpinner
} from '../components/ui/FormComponents';

// Context
import { AuthContext } from '../context/AuthContext';

// Utils
import { getCategoryPlaceholder } from '../utils/imageUtils';

const EnhancedBooking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useContext(AuthContext);

  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Enhanced form data
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || '',
    emergencyContact: '',
    emergencyPhone: '',

    // Step 2: Program & Accommodation
    program: searchParams.get('program') || '',
    accommodation: '',
    guests: 1,
    checkIn: '',
    checkOut: '',

    // Step 3: Additional Services & Preferences
    airportPickup: false,
    mealPreference: 'vegetarian',
    yogaExperience: user?.yogaExperience || '',
    healthConditions: '',
    specialRequests: '',

    // Step 4: Payment & Confirmation
    paymentMethod: 'card',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const [programs, setPrograms] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [pricing, setPricing] = useState(null);
  const [availability, setAvailability] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  // Animation hooks
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Step definitions
  const steps = [
    { id: 1, title: 'Personal Info', icon: FaUsers, description: 'Your details' },
    { id: 2, title: 'Program & Stay', icon: FaCalendarAlt, description: 'Choose your experience' },
    { id: 3, title: 'Preferences', icon: FaGift, description: 'Customize your stay' },
    { id: 4, title: 'Payment', icon: FaCreditCard, description: 'Secure booking' }
  ];

  // Meal preferences
  const mealPreferences = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-Free' },
    { value: 'dairy-free', label: 'Dairy-Free' },
    { value: 'other', label: 'Other (specify in special requests)' }
  ];

  // Yoga experience levels
  const yogaExperienceLevels = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' },
    { value: 'teacher', label: 'Yoga Teacher' }
  ];

  // Payment methods
  const paymentMethods = [
    { value: 'card', label: 'Credit/Debit Card', icon: FaCreditCard },
    { value: 'bank', label: 'Bank Transfer', icon: FaLock },
    { value: 'paypal', label: 'PayPal', icon: FaShieldAlt }
  ];

  // Fetch initial data
  useEffect(() => {
    fetchInitialData();
  }, []);

  // Update pricing when selection changes
  useEffect(() => {
    if (formData.program && formData.accommodation && formData.checkIn && formData.checkOut) {
      calculatePricing();
    }
  }, [formData.program, formData.accommodation, formData.checkIn, formData.checkOut, formData.guests, formData.airportPickup]);

  // Check availability when dates change
  useEffect(() => {
    if (formData.program && formData.checkIn && formData.checkOut) {
      checkAvailability();
    }
  }, [formData.program, formData.checkIn, formData.checkOut]);

  const fetchInitialData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      // Fetch programs and accommodations
      const [programsRes, accommodationsRes] = await Promise.all([
        fetch(`${apiUrl}/api/programs`),
        fetch(`${apiUrl}/api/accommodations`)
      ]);

      if (programsRes.ok && accommodationsRes.ok) {
        const programsData = await programsRes.json();
        const accommodationsData = await accommodationsRes.json();

        setPrograms(programsData.data || []);
        setAccommodations(accommodationsData.data || []);

        // Set selected program if provided in URL
        if (formData.program) {
          const program = programsData.data?.find(p => p._id === formData.program);
          setSelectedProgram(program);
        }
      }
    } catch (error) {
      console.error('Failed to fetch initial data:', error);
      // Fallback to sample data
      setPrograms([
        { _id: 'ytt', title: '200-Hour Yoga Teacher Training', price: 2800, duration: 26, description: 'Comprehensive certification program' },
        { _id: 'meditation', title: 'Meditation & Mindfulness Retreat', price: 1200, duration: 7, description: 'Deep meditation practice' },
        { _id: 'ayurveda', title: 'Ayurvedic Panchakarma Cleanse', price: 1800, duration: 14, description: 'Traditional healing program' },
        { _id: 'trek', title: 'Himalayan Trek & Yoga Adventure', price: 1500, duration: 10, description: 'Adventure and yoga combined' },
        { _id: 'wellness', title: 'Wellness Detox Program', price: 1000, duration: 7, description: 'Complete wellness transformation' },
        { _id: 'spiritual', title: 'Spiritual Healing Retreat', price: 1300, duration: 10, description: 'Inner healing journey' }
      ]);

      setAccommodations([
        { _id: 'standard', name: 'Standard Room', pricePerNight: 50, description: 'Comfortable room with mountain views', amenities: ['Private bathroom', 'Mountain view', 'Daily housekeeping'] },
        { _id: 'deluxe', name: 'Deluxe Room', pricePerNight: 80, description: 'Spacious room with private balcony', amenities: ['Private bathroom', 'Balcony', 'Mountain view', 'Mini fridge'] },
        { _id: 'suite', name: 'Himalayan Suite', pricePerNight: 120, description: 'Luxury suite with panoramic views', amenities: ['Separate living area', 'Panoramic view', 'Premium amenities', 'Room service'] },
        { _id: 'cottage', name: 'Private Cottage', pricePerNight: 150, description: 'Secluded cottage for ultimate privacy', amenities: ['Complete privacy', 'Garden view', 'Kitchenette', 'Private entrance'] },
        { _id: 'dormitory', name: 'Shared Dormitory', pricePerNight: 30, description: 'Budget-friendly shared accommodation', amenities: ['Shared bathroom', 'Lockers', 'Common area', 'Budget-friendly'] }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const calculatePricing = () => {
    const program = programs.find(p => p._id === formData.program);
    const accommodation = accommodations.find(a => a._id === formData.accommodation);

    if (!program || !accommodation) return;

    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    const programPrice = program.price * formData.guests;
    const accommodationPrice = accommodation.pricePerNight * nights * formData.guests;
    const airportPickupPrice = formData.airportPickup ? 50 * formData.guests : 0;

    const subtotal = programPrice + accommodationPrice + airportPickupPrice;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    setPricing({
      programPrice,
      accommodationPrice,
      airportPickupPrice,
      subtotal,
      tax,
      total,
      nights,
      deposit: total * 0.3, // 30% deposit
      remaining: total * 0.7
    });
  };

  const checkAvailability = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/programs/${formData.program}/availability?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}`);

      if (response.ok) {
        const data = await response.json();
        setAvailability(data.data);
      }
    } catch (error) {
      console.error('Failed to check availability:', error);
      // Mock availability for demo
      setAvailability({
        available: true,
        spotsLeft: 7,
        maxCapacity: 15
      });
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: newValue
    }));

    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Update selected program/accommodation
    if (name === 'program') {
      const program = programs.find(p => p._id === value);
      setSelectedProgram(program);
    }

    if (name === 'accommodation') {
      const accommodation = accommodations.find(a => a._id === value);
      setSelectedAccommodation(accommodation);
    }
  };

  // Form validation
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      // Personal Information
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
      if (!formData.emergencyPhone) newErrors.emergencyPhone = 'Emergency phone is required';
    }

    if (step === 2) {
      // Program Selection
      if (!formData.program) newErrors.program = 'Please select a program';
      if (!formData.accommodation) newErrors.accommodation = 'Please select accommodation';
      if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
      if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
      if (formData.guests < 1) newErrors.guests = 'At least 1 guest is required';

      // Date validation
      if (formData.checkIn && formData.checkOut) {
        const checkIn = new Date(formData.checkIn);
        const checkOut = new Date(formData.checkOut);
        const today = new Date();

        if (checkIn < today) newErrors.checkIn = 'Check-in date cannot be in the past';
        if (checkOut <= checkIn) newErrors.checkOut = 'Check-out date must be after check-in date';
      }
    }

    if (step === 3) {
      // Additional Information
      if (!formData.yogaExperience) newErrors.yogaExperience = 'Please select your yoga experience level';
      if (!formData.mealPreference) newErrors.mealPreference = 'Please select meal preference';
    }

    if (step === 4) {
      // Payment & Terms
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step navigation
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    // Only allow going to previous steps or next step if current is valid
    if (step < currentStep || (step === currentStep + 1 && validateStep(currentStep))) {
      setCurrentStep(step);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(4)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('token');

      const headers = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: 'POST',
        headers,
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Booking failed');
      }

      setSubmitSuccess(true);
      // Redirect to confirmation page or dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);

    } catch (error) {
      console.error('Booking error:', error);
      setSubmitError(error.message || 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner size="lg" />
        <LoadingText>Loading booking form...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <BookingHero ref={heroRef}>
        <HeroOverlay />
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="Book Your Transformative Journey"
              subtitle="Secure Your Spot"
              align="center"
              color="light"
              withDivider
            />
            <HeroText>
              Complete your booking in just a few simple steps and begin your wellness adventure
            </HeroText>
          </motion.div>
        </HeroContent>
      </BookingHero>

      {/* Booking Form Section */}
      <BookingSection ref={formRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <BookingContainer>
            {/* Progress Steps */}
            <StepsContainer>
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <StepItem
                    key={step.id}
                    $active={isActive}
                    $completed={isCompleted}
                    onClick={() => goToStep(step.id)}
                  >
                    <StepIcon $active={isActive} $completed={isCompleted}>
                      {isCompleted ? <FaCheckCircle /> : <Icon />}
                    </StepIcon>
                    <StepContent>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </StepContent>
                    {index < steps.length - 1 && <StepConnector $completed={isCompleted} />}
                  </StepItem>
                );
              })}
            </StepsContainer>

            {/* Form Content */}
            <FormContainer>
              <AnimatePresence mode="wait">
                {currentStep === 1 && <PersonalInfoStep key="step1" />}
                {currentStep === 2 && <ProgramSelectionStep key="step2" />}
                {currentStep === 3 && <PreferencesStep key="step3" />}
                {currentStep === 4 && <PaymentStep key="step4" />}
              </AnimatePresence>
            </FormContainer>

            {/* Pricing Summary (visible from step 2) */}
            {currentStep >= 2 && pricing && (
              <PricingSummary>
                <SummaryTitle>Booking Summary</SummaryTitle>
                <PriceBreakdown>
                  <PriceItem>
                    <PriceLabel>Program ({formData.guests} guest{formData.guests > 1 ? 's' : ''})</PriceLabel>
                    <PriceValue>${pricing.programPrice}</PriceValue>
                  </PriceItem>
                  <PriceItem>
                    <PriceLabel>Accommodation ({pricing.nights} night{pricing.nights > 1 ? 's' : ''})</PriceLabel>
                    <PriceValue>${pricing.accommodationPrice}</PriceValue>
                  </PriceItem>
                  {formData.airportPickup && (
                    <PriceItem>
                      <PriceLabel>Airport Pickup</PriceLabel>
                      <PriceValue>${pricing.airportPickupPrice}</PriceValue>
                    </PriceItem>
                  )}
                  <PriceItem>
                    <PriceLabel>Subtotal</PriceLabel>
                    <PriceValue>${pricing.subtotal}</PriceValue>
                  </PriceItem>
                  <PriceItem>
                    <PriceLabel>Tax (10%)</PriceLabel>
                    <PriceValue>${pricing.tax}</PriceValue>
                  </PriceItem>
                  <PriceDivider />
                  <PriceItem $total>
                    <PriceLabel>Total</PriceLabel>
                    <PriceValue>${pricing.total}</PriceValue>
                  </PriceItem>
                  <DepositInfo>
                    <FaInfoCircle />
                    <span>Deposit required: ${pricing.deposit} (30%)</span>
                  </DepositInfo>
                </PriceBreakdown>
              </PricingSummary>
            )}
          </BookingContainer>
        </motion.div>
      </BookingSection>
    </main>
  );
};

// Step Components
const PersonalInfoStep = () => (
  <StepContainer
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    <StepHeader>
      <StepTitle>Personal Information</StepTitle>
      <StepSubtitle>Tell us about yourself</StepSubtitle>
    </StepHeader>

    <FormSection title="Basic Information">
      <FormRow>
        <FormGroup error={errors.firstName}>
          <FormLabel htmlFor="firstName" required>First Name</FormLabel>
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
          <FormLabel htmlFor="lastName" required>Last Name</FormLabel>
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

      <FormRow>
        <FormGroup error={errors.email}>
          <FormLabel htmlFor="email" required>Email Address</FormLabel>
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

        <FormGroup error={errors.phone}>
          <FormLabel htmlFor="phone" required>Phone Number</FormLabel>
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
      </FormRow>

      <FormGroup error={errors.dateOfBirth}>
        <FormLabel htmlFor="dateOfBirth" required>Date of Birth</FormLabel>
        <FormInput
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
        />
      </FormGroup>
    </FormSection>

    <FormSection title="Emergency Contact">
      <FormRow>
        <FormGroup error={errors.emergencyContact}>
          <FormLabel htmlFor="emergencyContact" required>Emergency Contact Name</FormLabel>
          <FormInput
            type="text"
            id="emergencyContact"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            placeholder="Full name of emergency contact"
            error={errors.emergencyContact}
          />
        </FormGroup>

        <FormGroup error={errors.emergencyPhone}>
          <FormLabel htmlFor="emergencyPhone" required>Emergency Contact Phone</FormLabel>
          <FormInput
            type="tel"
            id="emergencyPhone"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            error={errors.emergencyPhone}
          />
        </FormGroup>
      </FormRow>
    </FormSection>

    <StepNavigation>
      <Button variant="outline" disabled>
        <FaArrowLeft /> Previous
      </Button>
      <Button variant="accent" onClick={nextStep}>
        Next <FaArrowRight />
      </Button>
    </StepNavigation>
  </StepContainer>
);

// Styled Components
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const BookingHero = styled(Section)`
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.accent} 100%);
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const HeroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const BookingSection = styled(Section)`
  background: ${({ theme }) => theme.colors.gray[50]};
  min-height: 80vh;
`;

const BookingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`;

const StepsContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StepItem = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ $completed, $active }) => ($completed || $active) ? 'pointer' : 'default'};
  opacity: ${({ $completed, $active }) => ($completed || $active) ? 1 : 0.6};
  position: relative;
  padding: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    padding: ${({ theme }) => theme.spacing[2]};
  }
`;

const StepIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $active, $completed, theme }) =>
    $completed ? theme.colors.green[500] :
    $active ? theme.colors.accent : theme.colors.gray[300]};
  color: ${({ $active, $completed, theme }) =>
    ($active || $completed) ? theme.colors.white : theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-right: ${({ theme }) => theme.spacing[3]};
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const StepConnector = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  width: 100px;
  height: 2px;
  background: ${({ $completed, theme }) =>
    $completed ? theme.colors.green[500] : theme.colors.gray[300]};
  transform: translateY(-50%);
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg,
      ${({ theme }) => theme.colors.accent} 0%,
      ${({ theme }) => theme.colors.primary} 50%,
      ${({ theme }) => theme.colors.secondary} 100%);
  }
`;

const StepContainer = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;

const StepHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  position: relative;

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing[4]};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg,
      ${({ theme }) => theme.colors.accent} 0%,
      ${({ theme }) => theme.colors.primary} 100%);
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

const StepSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const StepNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const PricingSummary = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing[8]};
  height: fit-content;
  position: sticky;
  top: ${({ theme }) => theme.spacing[6]};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg,
      ${({ theme }) => theme.colors.accent} 0%,
      ${({ theme }) => theme.colors.primary} 50%,
      ${({ theme }) => theme.colors.secondary} 100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: static;
    order: -1;
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

const SummaryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;
`;

const PriceBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ $total, theme }) =>
    $total ? theme.typography.fontSize.lg : theme.typography.fontSize.md};
  font-weight: ${({ $total, theme }) =>
    $total ? theme.typography.fontWeight.bold : theme.typography.fontWeight.medium};
  color: ${({ $total, theme }) =>
    $total ? theme.colors.accent : theme.colors.gray[700]};
`;

const PriceLabel = styled.span``;

const PriceValue = styled.span``;

const PriceDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.gray[200]};
  margin: ${({ theme }) => theme.spacing[2]} 0;
`;

const DepositInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.colors.blue[50]};
  color: ${({ theme }) => theme.colors.blue[700]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing[3]};

  svg {
    color: ${({ theme }) => theme.colors.blue[500]};
    flex-shrink: 0;
  }
`;

export default EnhancedBooking;
