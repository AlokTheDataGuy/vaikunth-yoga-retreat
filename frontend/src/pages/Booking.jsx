import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCalendarAlt,
  FaUsers,
  FaYinYang,
  FaBed,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaShieldAlt,
  FaCreditCard,
  FaLock,
  FaInfoCircle,
  FaExclamationTriangle,
  FaCalculator,
  FaGift
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

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useContext(AuthContext);

  // Enhanced form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || '',
    emergencyContact: '',
    emergencyPhone: '',

    // Program Selection
    program: searchParams.get('program') || '',
    accommodation: '',
    guests: 1,
    checkIn: '',
    checkOut: '',

    // Additional Services
    airportPickup: false,
    mealPreference: 'vegetarian',
    yogaExperience: user?.yogaExperience || '',
    healthConditions: '',
    specialRequests: '',

    // Payment
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

  // Fetch data on component mount
  useEffect(() => {
    fetchInitialData();
  }, []);

  // Update pricing when selection changes
  useEffect(() => {
    if (formData.program && formData.accommodation && formData.checkIn && formData.checkOut) {
      calculatePricing();
    }
  }, [formData.program, formData.accommodation, formData.checkIn, formData.checkOut, formData.guests]);

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
        { _id: 'ytt', title: '200-Hour Yoga Teacher Training', price: 2800, duration: 26 },
        { _id: 'meditation', title: 'Meditation & Mindfulness Retreat', price: 1200, duration: 7 },
        { _id: 'ayurveda', title: 'Ayurvedic Panchakarma Cleanse', price: 1800, duration: 14 },
        { _id: 'trek', title: 'Himalayan Trek & Yoga Adventure', price: 1500, duration: 10 },
        { _id: 'wellness', title: 'Wellness Detox Program', price: 1000, duration: 7 },
        { _id: 'spiritual', title: 'Spiritual Healing Retreat', price: 1300, duration: 10 }
      ]);

      setAccommodations([
        { _id: 'standard', name: 'Standard Room', pricePerNight: 50, description: 'Comfortable room with mountain views' },
        { _id: 'deluxe', name: 'Deluxe Room', pricePerNight: 80, description: 'Spacious room with private balcony' },
        { _id: 'suite', name: 'Himalayan Suite', pricePerNight: 120, description: 'Luxury suite with panoramic views' },
        { _id: 'cottage', name: 'Private Cottage', pricePerNight: 150, description: 'Secluded cottage for ultimate privacy' },
        { _id: 'dormitory', name: 'Shared Dormitory', pricePerNight: 30, description: 'Budget-friendly shared accommodation' }
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
      deposit: total * 0.3 // 30% deposit
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
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Get the API URL from environment or use default
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      // Send data to backend
      const response = await fetch(`${apiUrl}/api/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSubmitSuccess(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        accommodation: '',
        guests: 1,
        checkIn: '',
        checkOut: '',
        specialRequests: '',
      });
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitError(error.message || 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <Section
        $backgroundImage="/assets/images/blog.png"
        $fullWidth={true}
        $overlay={true}
        ref={heroRef}
      >
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="Reserve Your Retreat"
              subtitle="Booking"
              align="center"
              color="light"
              withDivider
            />
            <HeroText>
              Begin your journey to wellness and self-discovery in the serene Himalayan mountains
            </HeroText>
          </motion.div>
        </HeroContent>
      </Section>

      {/* Booking Form Section */}
      <Section ref={formRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <BookingContainer>
            <BookingInfo>
              <InfoHeading>Plan Your Transformative Experience</InfoHeading>
              <InfoText>
                Complete the form to reserve your spot at Vaikunth Yoga Retreat. Our team will contact you within 24 hours to confirm availability and provide payment details.
              </InfoText>

              <FeaturesList>
                <FeatureItem>
                  <FeatureIcon>
                    <FaCalendarAlt />
                  </FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>Flexible Dates</FeatureTitle>
                    <FeatureDescription>Choose arrival and departure dates that work for you</FeatureDescription>
                  </FeatureText>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>
                    <FaUsers />
                  </FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>Group Bookings</FeatureTitle>
                    <FeatureDescription>Special rates available for groups of 5 or more</FeatureDescription>
                  </FeatureText>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>
                    <FaYinYang />
                  </FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>Customized Programs</FeatureTitle>
                    <FeatureDescription>Tailor your retreat to your specific wellness goals</FeatureDescription>
                  </FeatureText>
                </FeatureItem>

                <FeatureItem>
                  <FeatureIcon>
                    <FaBed />
                  </FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>Accommodation Options</FeatureTitle>
                    <FeatureDescription>From budget-friendly to luxury experiences</FeatureDescription>
                  </FeatureText>
                </FeatureItem>
              </FeaturesList>

              <InfoNote>
                * A 30% deposit is required to confirm your booking. Cancellations made 30 days or more before arrival receive a full refund minus processing fees.
              </InfoNote>
            </BookingInfo>

            <BookingForm onSubmit={handleSubmit}>
              {submitSuccess ? (
                <BookingSuccessMessage>
                  <h3>Booking Request Received!</h3>
                  <p>Thank you for choosing Vaikunth Yoga Retreat. We've received your booking request and will contact you within 24 hours to confirm your reservation.</p>
                  <Button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    variant="outline"
                  >
                    Make Another Booking
                  </Button>
                </BookingSuccessMessage>
              ) : (
                <>
                  <FormHeading>Booking Details</FormHeading>

                  {submitError && <ErrorMessage>{submitError}</ErrorMessage>}

                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="firstName">First Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel htmlFor="lastName">Last Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="email">Email Address *</FormLabel>
                      <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel htmlFor="phone">Phone Number *</FormLabel>
                      <FormInput
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="program">Select Program *</FormLabel>
                      <FormSelect
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a program...</option>
                        {programs.map(program => (
                          <option key={program.id} value={program.id}>
                            {program.name}
                          </option>
                        ))}
                      </FormSelect>
                    </FormGroup>

                    <FormGroup>
                      <FormLabel htmlFor="accommodation">Accommodation *</FormLabel>
                      <FormSelect
                        id="accommodation"
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose accommodation...</option>
                        {accommodations.map(accommodation => (
                          <option key={accommodation.id} value={accommodation.id}>
                            {accommodation.name} ({accommodation.price})
                          </option>
                        ))}
                      </FormSelect>
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="guests">Number of Guests *</FormLabel>
                      <FormInput
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="10"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel htmlFor="checkIn">Check-in Date *</FormLabel>
                      <FormInput
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel htmlFor="checkOut">Check-out Date *</FormLabel>
                      <FormInput
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <FormLabel htmlFor="specialRequests">Special Requests</FormLabel>
                    <FormTextarea
                      id="specialRequests"
                      name="specialRequests"
                      rows="4"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Dietary restrictions, accessibility needs, or any other special requirements..."
                    />
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="accent"
                    size="large"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Booking'}
                  </SubmitButton>
                </>
              )}
            </BookingForm>
          </BookingContainer>
        </motion.div>
      </Section>
    </main>
  );
};

// Styled Components
const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[16]} 0;
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

const BookingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing[10]};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const BookingInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[8]};
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

const InfoHeading = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.6;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const FeatureIcon = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

const FeatureText = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const InfoNote = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  font-style: italic;
  line-height: 1.6;
`;

const BookingForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[10]};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;

const FormHeading = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  position: relative;

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

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const BookingSuccessMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  p {
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    line-height: 1.6;
  }

  button {
    margin: 0 auto;
  }
`;

export default Booking;
