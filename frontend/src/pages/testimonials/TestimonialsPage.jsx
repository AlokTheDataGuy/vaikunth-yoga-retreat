import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFilter, FaStar } from 'react-icons/fa';

// Components
import Section from '../../components/ui/Section';
import SectionHeading from '../../components/ui/SectionHeading';
import TestimonialCard from '../../components/testimonials/TestimonialCard';

// Sample testimonial data (expanded for the dedicated page)
const allTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'My experience at Vaikunth Yoga Retreat was truly transformative. The serene environment, expert instructors, and holistic approach to wellness helped me reconnect with myself in ways I never thought possible.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    program: 'Yoga Teacher Training',
    date: '2023-04-15'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    text: 'The meditation retreat exceeded all my expectations. The peaceful Himalayan setting and the authentic yoga practices have given me tools that I continue to use in my daily life.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    program: 'Meditation Retreat',
    date: '2023-05-22'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'London, UK',
    text: 'As a yoga instructor myself, I was impressed by the depth of knowledge and the traditional approach at Vaikunth. The Ayurvedic treatments and personalized attention made this a standout experience.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    program: 'Ayurveda Panchakarma',
    date: '2023-03-10'
  },
  {
    id: 4,
    name: 'David Wilson',
    location: 'Sydney, Australia',
    text: 'The Himalayan trek combined with daily yoga sessions was the perfect balance of adventure and mindfulness. The accommodations were comfortable and the food was exceptional.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    program: 'Himalayan Trek & Yoga',
    date: '2023-06-05'
  },
  {
    id: 5,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    text: 'I came to Vaikunth feeling burnt out and left feeling renewed. The spiritual healing program addressed both my physical and emotional needs. The staff was incredibly supportive throughout my journey.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    program: 'Spiritual Healing',
    date: '2023-02-18'
  },
  {
    id: 6,
    name: 'Raj Patel',
    location: 'Mumbai, India',
    text: 'The wellness detox program was exactly what I needed. The combination of yoga, meditation, and Ayurvedic diet helped me reset my system. I feel lighter both physically and mentally.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    program: 'Wellness Detox',
    date: '2023-07-12'
  },
  {
    id: 7,
    name: 'Sophie Martin',
    location: 'Paris, France',
    text: 'The teacher training program was rigorous but incredibly rewarding. I not only deepened my practice but also gained the confidence to share yoga with others. The community aspect was wonderful.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    program: 'Yoga Teacher Training',
    date: '2023-01-30'
  },
  {
    id: 8,
    name: 'James Thompson',
    location: 'Chicago, USA',
    text: 'I was hesitant about the meditation retreat as a beginner, but the instructors made it accessible for all levels. The techniques I learned have helped me manage stress in my daily life.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    program: 'Meditation Retreat',
    date: '2023-05-05'
  }
];

// Program categories for filtering
const programCategories = [
  'All Programs',
  'Yoga Teacher Training',
  'Meditation Retreat',
  'Ayurveda Panchakarma',
  'Spiritual Healing',
  'Himalayan Trek & Yoga',
  'Wellness Detox'
];

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Programs');
  const [activeRating, setActiveRating] = useState(0);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Filter testimonials based on active filters
  const filteredTestimonials = allTestimonials.filter(testimonial => {
    const programMatch = activeFilter === 'All Programs' || testimonial.program === activeFilter;
    const ratingMatch = activeRating === 0 || testimonial.rating >= activeRating;
    return programMatch && ratingMatch;
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <Section
        $backgroundImage="/assets/images/testimonials/testimonials-hero.jpg"
        // $backgroundImage="/assets/images/blog.png"
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
              title="Guest Experiences"
              subtitle="Testimonials"
              align="center"
              color="light"
              withDivider
            />
            <HeroText>
              Discover the transformative journeys of our guests from around the world
            </HeroText>
          </motion.div>
        </HeroContent>
      </Section>

      {/* Testimonials Section */}
      <Section ref={contentRef}>
        <motion.div
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <TestimonialsContainer>
            {/* Filters */}
            <FiltersContainer>
              <FilterGroup>
                <FilterLabel>
                  <FaFilter />
                  <span>Filter by Program:</span>
                </FilterLabel>
                <ProgramFilters>
                  {programCategories.map(program => (
                    <FilterButton
                      key={program}
                      $isActive={activeFilter === program}
                      onClick={() => setActiveFilter(program)}
                    >
                      {program}
                    </FilterButton>
                  ))}
                </ProgramFilters>
              </FilterGroup>

              <FilterGroup>
                <FilterLabel>
                  <FaStar />
                  <span>Filter by Rating:</span>
                </FilterLabel>
                <RatingFilters>
                  <FilterButton
                    $isActive={activeRating === 0}
                    onClick={() => setActiveRating(0)}
                  >
                    All Ratings
                  </FilterButton>
                  {[5, 4, 3].map(rating => (
                    <FilterButton
                      key={rating}
                      $isActive={activeRating === rating}
                      onClick={() => setActiveRating(rating)}
                    >
                      {rating}+ Stars
                    </FilterButton>
                  ))}
                </RatingFilters>
              </FilterGroup>
            </FiltersContainer>

            {/* Testimonials Grid */}
            {filteredTestimonials.length > 0 ? (
              <motion.div variants={staggerContainer}>
                <TestimonialsGrid>
                  {filteredTestimonials.map(testimonial => (
                    <motion.div key={testimonial.id} variants={fadeIn}>
                      <TestimonialCard testimonial={testimonial} />
                    </motion.div>
                  ))}
                </TestimonialsGrid>
              </motion.div>
            ) : (
              <NoResultsMessage>
                No testimonials match your current filters. Please try different criteria.
              </NoResultsMessage>
            )}
          </TestimonialsContainer>
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

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FiltersContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
  }
`;

const FilterLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProgramFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: ${({ theme }) => theme.spacing[2]};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const RatingFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: ${({ theme }) => theme.spacing[2]};
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FilterButton = styled.button`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.gray[100]};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.gray[700]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary : theme.colors.gray[200]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-shrink: 0;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[10]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export default TestimonialsPage;