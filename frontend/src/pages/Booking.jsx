import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaUsers, FaYinYang, FaBed } from 'react-icons/fa';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const Booking = () => {
  // Form state
  const [formData, setFormData] = useState({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Animation hooks
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Sample program data
  const programs = [
    { id: 'ytt', name: '200-Hour Yoga Teacher Training' },
    { id: 'meditation', name: 'Meditation & Mindfulness Retreat' },
    { id: 'ayurveda', name: 'Ayurvedic Panchakarma Cleanse' },
    { id: 'trek', name: 'Himalayan Trek & Yoga Adventure' },
    { id: 'wellness', name: 'Wellness Detox Program' },
    { id: 'spiritual', name: 'Spiritual Healing Retreat' }
  ];

  // Sample accommodation data
  const accommodations = [
    { id: 'standard', name: 'Standard Room', price: 'From $50/night' },
    { id: 'deluxe', name: 'Deluxe Room', price: 'From $80/night' },
    { id: 'suite', name: 'Himalayan Suite', price: 'From $120/night' },
    { id: 'cottage', name: 'Private Cottage', price: 'From $150/night' },
    { id: 'dormitory', name: 'Shared Dormitory', price: 'From $30/night' }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
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
                <SuccessMessage>
                  <h3>Booking Request Received!</h3>
                  <p>Thank you for choosing Vaikunth Yoga Retreat. We've received your booking request and will contact you within 24 hours to confirm your reservation.</p>
                  <Button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    variant="outline"
                  >
                    Make Another Booking
                  </Button>
                </SuccessMessage>
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
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const FormHeading = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: center;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.charcoal};
  background-color: white;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.charcoal};
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }

  option {
    color: ${({ theme }) => theme.colors.charcoal};
    background-color: white;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.charcoal};
  background-color: white;
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.error}20;
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const SuccessMessage = styled.div`
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
