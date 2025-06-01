import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaClock, FaMapMarkerAlt, FaCheck, FaArrowLeft } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// Utils
import { getCategoryPlaceholder, getImageUrl } from '../utils/imageUtils';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Animation hooks
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [detailsRef, detailsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Fetch program data
  useEffect(() => {
    const fetchProgram = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/programs/${id}`);

        if (!response.ok) {
          throw new Error('Program not found');
        }

        const data = await response.json();
        setProgram(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProgram();
  }, [id]);

  // Sample data fallback for development
  const sampleProgram = {
    id: 1,
    title: '200-Hour Yoga Teacher Training',
    subtitle: 'Comprehensive Certification Program',
    description: 'Immerse yourself in a transformative journey to become a certified yoga instructor in the serene Himalayan mountains. This comprehensive program covers asana practice, teaching methodology, anatomy, philosophy, and more.',
    longDescription: `This intensive 200-hour Yoga Teacher Training program is designed for dedicated practitioners who wish to deepen their understanding of yoga and share this ancient wisdom with others. Set in the breathtaking Himalayan mountains of Auli, this training combines traditional teachings with modern methodology.

Our program follows the Yoga Alliance standards and covers all essential aspects of yoga instruction including asana practice, pranayama, meditation, yoga philosophy, anatomy, teaching methodology, and ethics. You'll practice teaching with experienced instructors who provide personalized feedback and guidance.

The training takes place in our beautiful yoga shala with panoramic mountain views, creating an inspiring environment for learning and growth. Daily schedules include morning meditation, asana practice, lectures, teaching practice, and evening reflection sessions.`,
    image: getImageUrl('/assets/images/programs/teacher-training.jpg', 1200, 800),
    gallery: [
      getCategoryPlaceholder('yoga', 400, 300),
      getCategoryPlaceholder('yoga', 400, 300),
      getCategoryPlaceholder('yoga', 400, 300),
      getCategoryPlaceholder('yoga', 400, 300)
    ],
    startDate: '2024-06-15',
    endDate: '2024-07-10',
    duration: '26 days',
    level: 'Intermediate',
    maxParticipants: 15,
    currentBookings: 8,
    price: 2800,
    currency: 'USD',
    location: 'Auli, Uttarakhand, India',
    instructor: {
      name: 'Swami Ananda',
      bio: 'Experienced yoga teacher with 15+ years of teaching experience',
      image: getCategoryPlaceholder('yoga', 200, 200)
    },
    highlights: [
      'Internationally recognized Yoga Alliance certification',
      'Small group size for personalized attention',
      'Daily meditation and pranayama practice',
      'Teaching practice with constructive feedback',
      'Comprehensive study materials included',
      'Vegetarian meals and accommodation included'
    ],
    curriculum: [
      {
        title: 'Asana Practice & Alignment',
        description: 'Learn proper alignment and modifications for all major yoga poses'
      },
      {
        title: 'Teaching Methodology',
        description: 'Develop skills in sequencing, cueing, and class management'
      },
      {
        title: 'Yoga Philosophy',
        description: 'Study ancient texts including Yoga Sutras and Bhagavad Gita'
      },
      {
        title: 'Anatomy & Physiology',
        description: 'Understand the body systems relevant to yoga practice'
      },
      {
        title: 'Pranayama & Meditation',
        description: 'Learn breathing techniques and meditation practices'
      },
      {
        title: 'Ethics & Business',
        description: 'Professional standards and building a yoga career'
      }
    ],
    schedule: {
      '6:00 AM': 'Morning Meditation',
      '7:00 AM': 'Pranayama Practice',
      '8:00 AM': 'Breakfast',
      '9:30 AM': 'Asana Practice',
      '11:30 AM': 'Philosophy Lecture',
      '1:00 PM': 'Lunch & Rest',
      '3:00 PM': 'Anatomy/Teaching Methodology',
      '4:30 PM': 'Teaching Practice',
      '6:00 PM': 'Evening Asana',
      '7:30 PM': 'Dinner',
      '8:30 PM': 'Evening Reflection/Study'
    },
    included: [
      '26 nights accommodation',
      'All vegetarian meals',
      'Yoga materials and props',
      'Course manual and materials',
      'Certificate upon completion',
      'Airport pickup from Dehradun'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Additional excursions'
    ]
  };

  const displayProgram = program || sampleProgram;

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <LoadingText>Loading program details...</LoadingText>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorText>Error: {error}</ErrorText>
        <Button onClick={() => navigate('/programs')} variant="outline">
          Back to Programs
        </Button>
      </ErrorContainer>
    );
  }

  const availableSpots = displayProgram.maxParticipants - displayProgram.currentBookings;
  const isAlmostFull = availableSpots <= 3;
  const isFull = availableSpots <= 0;

  return (
    <main>
      {/* Hero Section */}
      <ProgramHero backgroundImage={displayProgram.image} ref={heroRef}>
        <HeroOverlay />
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <BackButton onClick={() => navigate('/programs')}>
              <FaArrowLeft /> Back to Programs
            </BackButton>
            <HeroTitle>{displayProgram.title}</HeroTitle>
            <HeroSubtitle>{displayProgram.subtitle}</HeroSubtitle>
            <HeroMeta>
              <MetaItem>
                <FaCalendarAlt />
                <span>{new Date(displayProgram.startDate).toLocaleDateString()} - {new Date(displayProgram.endDate).toLocaleDateString()}</span>
              </MetaItem>
              <MetaItem>
                <FaClock />
                <span>{displayProgram.duration}</span>
              </MetaItem>
              <MetaItem>
                <FaMapMarkerAlt />
                <span>{displayProgram.location}</span>
              </MetaItem>
            </HeroMeta>
          </motion.div>
        </HeroContent>
      </ProgramHero>

      {/* Program Details Section */}
      <Section ref={detailsRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <ProgramContainer>
            <MainContent>
              <ProgramInfo>
                <SectionHeading
                  title="Program Overview"
                  subtitle=""
                  align="left"
                  withDivider={false}
                />
                <ProgramDescription>
                  {displayProgram.longDescription}
                </ProgramDescription>

                <HighlightsSection>
                  <HighlightsTitle>Program Highlights</HighlightsTitle>
                  <HighlightsList>
                    {displayProgram.highlights.map((highlight, index) => (
                      <HighlightItem key={index}>
                        <FaCheck />
                        <span>{highlight}</span>
                      </HighlightItem>
                    ))}
                  </HighlightsList>
                </HighlightsSection>
              </ProgramInfo>

              <BookingCard>
                <BookingHeader>
                  <PriceSection>
                    <Price>${displayProgram.price}</Price>
                    <PriceNote>per person</PriceNote>
                  </PriceSection>
                  <AvailabilitySection>
                    <AvailabilityText $isAlmostFull={isAlmostFull} $isFull={isFull}>
                      {isFull ? 'Fully Booked' : `${availableSpots} spots left`}
                    </AvailabilityText>
                    <ParticipantsText>
                      {displayProgram.currentBookings}/{displayProgram.maxParticipants} participants
                    </ParticipantsText>
                  </AvailabilitySection>
                </BookingHeader>

                <BookingDetails>
                  <DetailRow>
                    <DetailLabel>Start Date:</DetailLabel>
                    <DetailValue>{new Date(displayProgram.startDate).toLocaleDateString()}</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>End Date:</DetailLabel>
                    <DetailValue>{new Date(displayProgram.endDate).toLocaleDateString()}</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>Duration:</DetailLabel>
                    <DetailValue>{displayProgram.duration}</DetailValue>
                  </DetailRow>
                  <DetailRow>
                    <DetailLabel>Level:</DetailLabel>
                    <DetailValue>{displayProgram.level}</DetailValue>
                  </DetailRow>
                </BookingDetails>

                <BookingActions>
                  <Button
                    to={`/booking?program=${displayProgram.id}`}
                    variant="accent"
                    size="large"
                    disabled={isFull}
                    fullWidth
                  >
                    {isFull ? 'Join Waitlist' : 'Book Now'}
                  </Button>
                  <Button
                    to="/contact"
                    variant="outline"
                    size="large"
                    fullWidth
                  >
                    Ask Questions
                  </Button>
                </BookingActions>
              </BookingCard>
            </MainContent>
          </ProgramContainer>
        </motion.div>
      </Section>
    </main>
  );
};

// Styled Components
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.gray[200]};
  border-top: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const ProgramHero = styled(Section)`
  height: 70vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  max-width: 1000px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  background: rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const HeroSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const HeroMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[6]};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ProgramContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const ProgramInfo = styled.div``;

const ProgramDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  white-space: pre-line;
`;

const HighlightsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const HighlightsTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray[700]};

  svg {
    color: ${({ theme }) => theme.colors.accent};
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const BookingCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  height: fit-content;
  position: sticky;
  top: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: static;
    order: -1;
  }
`;

const BookingHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const PriceSection = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent};
`;

const PriceNote = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const AvailabilitySection = styled.div`
  text-align: center;
`;

const AvailabilityText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ $isFull, $isAlmostFull, theme }) =>
    $isFull ? theme.colors.red[600] :
    $isAlmostFull ? theme.colors.orange[600] :
    theme.colors.green[600]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const ParticipantsText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const BookingDetails = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: ${({ theme }) => theme.spacing[4]} 0;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const DetailValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const BookingActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export default ProgramDetail;
