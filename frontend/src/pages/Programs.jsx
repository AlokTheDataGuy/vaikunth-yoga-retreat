import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaLeaf, FaMountain } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// Utils
import { getCategoryPlaceholder, getImageUrl } from '../utils/imageUtils';

const Programs = () => {
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

  // State for filters
  const [activeFilters, setActiveFilters] = useState({
    duration: 'all',
    category: 'all',
    level: 'all'
  });

  // Intersection observer hooks for animations
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [programsRef, programsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Sample data for programs
  const allPrograms = [
    {
      id: 1,
      title: '200-Hour Yoga Teacher Training',
      subtitle: 'Jun 15 - Jul 10, 2023',
      image: getImageUrl('/assets/images/programs/teacher-training.jpg', 800, 600),
      duration: '26 days',
      category: 'teacher-training',
      level: 'intermediate',
      price: '$2,800',
      description: 'Immerse yourself in a transformative journey to become a certified yoga instructor in the serene Himalayan mountains. This comprehensive program covers asana practice, teaching methodology, anatomy, philosophy, and more.',
      highlights: [
        'Internationally recognized certification',
        'Small group size (max 15 students)',
        'Daily meditation and pranayama',
        'Teaching practice with feedback'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Meditation & Mindfulness Retreat',
      subtitle: 'Jul 20 - Jul 27, 2023',
      image: getImageUrl('/assets/images/programs/meditation-retreat.jpg', 800, 600),
      duration: '7 days',
      category: 'meditation',
      level: 'all-levels',
      price: '$1,200',
      description: 'Discover inner peace and mental clarity through guided meditation practices and mindfulness techniques. This retreat is perfect for those seeking to deepen their meditation practice or find relief from stress and anxiety.',
      highlights: [
        'Various meditation techniques',
        'Mindful hiking in nature',
        'Silent meditation days',
        'Personalized guidance'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Ayurvedic Panchakarma Cleanse',
      subtitle: 'Aug 5 - Aug 19, 2023',
      image: getCategoryPlaceholder('yoga', 800, 600),
      duration: '14 days',
      category: 'ayurveda',
      level: 'all-levels',
      price: '$3,200',
      description: 'Experience the ancient healing system of Ayurveda with personalized treatments and cleansing therapies. This program includes consultation with our Ayurvedic doctor, daily treatments, and a specialized diet.',
      highlights: [
        'Personalized dosha assessment',
        'Daily Ayurvedic treatments',
        'Detoxifying diet plan',
        'Herbal medicine workshops'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'Himalayan Trek & Yoga Adventure',
      subtitle: 'Sep 10 - Sep 20, 2023',
      image: getCategoryPlaceholder('nature', 800, 600),
      duration: '10 days',
      category: 'adventure',
      level: 'intermediate',
      price: '$1,800',
      description: 'Combine the thrill of Himalayan trekking with rejuvenating yoga practices for an unforgettable adventure. Trek through stunning landscapes, practice yoga in nature, and connect with local culture.',
      highlights: [
        'Guided treks to scenic viewpoints',
        'Daily yoga sessions',
        'Local village visits',
        'Camping under the stars'
      ],
      featured: true
    },
    {
      id: 5,
      title: 'Spiritual Healing Retreat',
      subtitle: 'Oct 5 - Oct 12, 2023',
      image: getCategoryPlaceholder('yoga', 800, 600),
      duration: '7 days',
      category: 'healing',
      level: 'all-levels',
      price: '$1,400',
      description: 'A holistic approach to healing emotional and spiritual wounds through various modalities including energy healing, sound therapy, meditation, and yoga. This retreat provides a safe space for transformation.',
      highlights: [
        'Energy healing sessions',
        'Sound bath ceremonies',
        'Emotional release workshops',
        'One-on-one healing sessions'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Wellness Detox Retreat',
      subtitle: 'Nov 15 - Nov 22, 2023',
      image: getCategoryPlaceholder('yoga', 800, 600),
      duration: '7 days',
      category: 'wellness',
      level: 'beginner',
      price: '$1,300',
      description: 'Cleanse your body and mind with this comprehensive detox program combining yoga, clean eating, juicing, and holistic wellness practices. Return home feeling refreshed and revitalized.',
      highlights: [
        'Organic vegetarian meals',
        'Daily yoga and meditation',
        'Juice fasting option',
        'Wellness workshops'
      ],
      featured: false
    },
    {
      id: 7,
      title: '300-Hour Advanced Yoga Teacher Training',
      subtitle: 'Jan 10 - Feb 15, 2024',
      image: getCategoryPlaceholder('yoga', 800, 600),
      duration: '35 days',
      category: 'teacher-training',
      level: 'advanced',
      price: '$3,500',
      description: 'Deepen your teaching skills and expand your knowledge with this advanced training for existing yoga teachers. Explore advanced asanas, therapeutic applications, and specialized teaching methodologies.',
      highlights: [
        'Advanced teaching techniques',
        'Yoga therapy applications',
        'Specialized workshops',
        'Teaching practicum'
      ],
      featured: false
    },
    {
      id: 8,
      title: 'Silent Meditation Retreat',
      subtitle: 'Mar 5 - Mar 15, 2024',
      image: getCategoryPlaceholder('yoga', 800, 600),
      duration: '10 days',
      category: 'meditation',
      level: 'intermediate',
      price: '$1,600',
      description: 'Experience the profound benefits of noble silence in this intensive meditation retreat. With minimal speaking and external stimulation, participants can dive deep into their meditation practice.',
      highlights: [
        'Maintained silence throughout',
        'Multiple meditation sessions daily',
        'Simple, nourishing meals',
        'Individual guidance when needed'
      ],
      featured: false
    }
  ];

  // Filter programs based on active filters
  const filteredPrograms = allPrograms.filter(program => {
    return (
      (activeFilters.duration === 'all' ||
        (activeFilters.duration === 'short' && parseInt(program.duration) <= 7) ||
        (activeFilters.duration === 'medium' && parseInt(program.duration) > 7 && parseInt(program.duration) <= 14) ||
        (activeFilters.duration === 'long' && parseInt(program.duration) > 14)) &&
      (activeFilters.category === 'all' || program.category === activeFilters.category) &&
      (activeFilters.level === 'all' || program.level === activeFilters.level || program.level === 'all-levels')
    );
  });

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <main>
      {/* Hero Section */}
      <PageHero backgroundImage={getImageUrl('/assets/images/programs-hero.jpg', 1920, 800)}>
        <PageHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageHeroHeading>Our Programs</PageHeroHeading>
            <PageHeroSubheading>Transformative Experiences in the Himalayas</PageHeroSubheading>
          </motion.div>
        </PageHeroContent>
      </PageHero>

      {/* Introduction Section */}
      <Section>
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Find Your Path"
            subtitle="Explore Our Offerings"
          />

          <IntroText>
            <p>
              At Vaikunth Yoga Retreat, we offer a diverse range of programs designed to nurture your body, mind, and spirit. Whether you're seeking to deepen your yoga practice, find inner peace through meditation, experience traditional Ayurvedic healing, or embark on an adventure in the Himalayas, we have a program that's perfect for you.
            </p>
            <p>
              Each program is thoughtfully crafted and led by experienced teachers who are dedicated to providing an authentic and transformative experience. Our small group sizes ensure personalized attention and a supportive community atmosphere.
            </p>
          </IntroText>

          <ProgramCategories>
            <CategoryCard>
              <CategoryIcon>
                <FaLeaf />
              </CategoryIcon>
              <CategoryTitle>Yoga & Meditation</CategoryTitle>
              <CategoryText>
                From intensive teacher trainings to gentle retreats, our yoga and meditation programs cater to all levels and interests.
              </CategoryText>
            </CategoryCard>

            <CategoryCard>
              <CategoryIcon>
                <FaUsers />
              </CategoryIcon>
              <CategoryTitle>Healing & Wellness</CategoryTitle>
              <CategoryText>
                Experience traditional Ayurvedic treatments, detox programs, and holistic healing modalities for complete rejuvenation.
              </CategoryText>
            </CategoryCard>

            <CategoryCard>
              <CategoryIcon>
                <FaMountain />
              </CategoryIcon>
              <CategoryTitle>Adventure & Nature</CategoryTitle>
              <CategoryText>
                Combine spiritual practices with Himalayan adventures, including treks, nature walks, and cultural excursions.
              </CategoryText>
            </CategoryCard>

            <CategoryCard>
              <CategoryIcon>
                <FaCalendarAlt />
              </CategoryIcon>
              <CategoryTitle>Seasonal Specials</CategoryTitle>
              <CategoryText>
                Join our special seasonal programs that align with natural cycles and traditional celebrations.
              </CategoryText>
            </CategoryCard>
          </ProgramCategories>
        </motion.div>
      </Section>

      {/* Programs Filter Section */}
      <Section variant="light">
        <motion.div
          ref={programsRef}
          initial="hidden"
          animate={programsInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Upcoming Programs"
            subtitle="Find Your Perfect Retreat"
          />

          <FiltersContainer>
            <FilterGroup>
              <FilterLabel>Duration:</FilterLabel>
              <FilterOptions>
                <FilterOption
                  active={activeFilters.duration === 'all'}
                  onClick={() => handleFilterChange('duration', 'all')}
                >
                  All
                </FilterOption>
                <FilterOption
                  active={activeFilters.duration === 'short'}
                  onClick={() => handleFilterChange('duration', 'short')}
                >
                  Short (≤ 7 days)
                </FilterOption>
                <FilterOption
                  active={activeFilters.duration === 'medium'}
                  onClick={() => handleFilterChange('duration', 'medium')}
                >
                  Medium (8-14 days)
                </FilterOption>
                <FilterOption
                  active={activeFilters.duration === 'long'}
                  onClick={() => handleFilterChange('duration', 'long')}
                >
                  Long (15+ days)
                </FilterOption>
              </FilterOptions>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>Category:</FilterLabel>
              <FilterOptions>
                <FilterOption
                  active={activeFilters.category === 'all'}
                  onClick={() => handleFilterChange('category', 'all')}
                >
                  All
                </FilterOption>
                <FilterOption
                  active={activeFilters.category === 'teacher-training'}
                  onClick={() => handleFilterChange('category', 'teacher-training')}
                >
                  Teacher Training
                </FilterOption>
                <FilterOption
                  active={activeFilters.category === 'meditation'}
                  onClick={() => handleFilterChange('category', 'meditation')}
                >
                  Meditation
                </FilterOption>
                <FilterOption
                  active={activeFilters.category === 'ayurveda'}
                  onClick={() => handleFilterChange('category', 'ayurveda')}
                >
                  Ayurveda
                </FilterOption>
                <FilterOption
                  active={activeFilters.category === 'adventure'}
                  onClick={() => handleFilterChange('category', 'adventure')}
                >
                  Adventure
                </FilterOption>
                <FilterOption
                  active={activeFilters.category === 'healing'}
                  onClick={() => handleFilterChange('category', 'healing')}
                >
                  Healing
                </FilterOption>
                <FilterOption
                  active={activeFilters.category === 'wellness'}
                  onClick={() => handleFilterChange('category', 'wellness')}
                >
                  Wellness
                </FilterOption>
              </FilterOptions>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>Level:</FilterLabel>
              <FilterOptions>
                <FilterOption
                  active={activeFilters.level === 'all'}
                  onClick={() => handleFilterChange('level', 'all')}
                >
                  All
                </FilterOption>
                <FilterOption
                  active={activeFilters.level === 'beginner'}
                  onClick={() => handleFilterChange('level', 'beginner')}
                >
                  Beginner
                </FilterOption>
                <FilterOption
                  active={activeFilters.level === 'intermediate'}
                  onClick={() => handleFilterChange('level', 'intermediate')}
                >
                  Intermediate
                </FilterOption>
                <FilterOption
                  active={activeFilters.level === 'advanced'}
                  onClick={() => handleFilterChange('level', 'advanced')}
                >
                  Advanced
                </FilterOption>
              </FilterOptions>
            </FilterGroup>
          </FiltersContainer>

          <ProgramsGrid>
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map(program => (
                <ProgramCard key={program.id}>
                  <Card
                    to={`/programs/${program.id}`}
                    image={program.image}
                    title={program.title}
                    subtitle={program.subtitle}
                    content={
                      <ProgramCardContent>
                        <ProgramDetails>
                          <ProgramDetail>
                            <DetailLabel>Duration:</DetailLabel>
                            <DetailValue>{program.duration}</DetailValue>
                          </ProgramDetail>
                          <ProgramDetail>
                            <DetailLabel>Level:</DetailLabel>
                            <DetailValue>{program.level.replace('-', ' ')}</DetailValue>
                          </ProgramDetail>
                          <ProgramDetail>
                            <DetailLabel>Price:</DetailLabel>
                            <DetailValue>{program.price}</DetailValue>
                          </ProgramDetail>
                        </ProgramDetails>
                        <ProgramDescription>
                          {program.description}
                        </ProgramDescription>
                      </ProgramCardContent>
                    }
                    footer={
                      <ProgramCardFooter>
                        <Button variant="text" size="small" to={`/programs/${program.id}`}>
                          View Details →
                        </Button>
                        {program.featured && <FeaturedBadge>Featured</FeaturedBadge>}
                      </ProgramCardFooter>
                    }
                  />
                </ProgramCard>
              ))
            ) : (
              <NoResults>
                <NoResultsText>No programs match your current filters. Please try different filter options.</NoResultsText>
                <Button variant="outline" onClick={() => setActiveFilters({ duration: 'all', category: 'all', level: 'all' })}>
                  Reset Filters
                </Button>
              </NoResults>
            )}
          </ProgramsGrid>
        </motion.div>
      </Section>

      {/* Custom Program Section */}
      <Section variant="primary">
        <CustomProgramContainer>
          <CustomProgramContent>
            <SectionHeading
              title="Custom Programs"
              subtitle="Tailored to Your Needs"
              align="left"
              withDivider={false}
            />
            <CustomProgramText>
              <p>
                Looking for something specific? We offer custom programs for individuals, couples, families, and groups. Whether you're seeking a personalized wellness journey, a private yoga immersion, or a team-building retreat, we can create a bespoke experience just for you.
              </p>
              <p>
                Our experienced team will work closely with you to design a program that meets your specific goals, preferences, and schedule. Contact us to start planning your custom retreat today.
              </p>
            </CustomProgramText>
            <Button to="/contact" variant="accent">
              Inquire About Custom Programs
            </Button>
          </CustomProgramContent>

          <CustomProgramImage>
            <img src={getCategoryPlaceholder('yoga', 600, 800)} alt="Custom yoga program" />
          </CustomProgramImage>
        </CustomProgramContainer>
      </Section>
    </main>
  );
};

// Styled Components
const PageHero = styled(Section)`
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`;

const PageHeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const PageHeroHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const PageHeroSubheading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const IntroText = styled.div`
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing[10]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  text-align: center;

  p {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const ProgramCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform ${({ theme }) => theme.animation.normal} ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const CategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.primary};
`;

const CategoryText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;

const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FilterGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const FilterOption = styled.button`
  background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.lightGray};
  color: ${({ active, theme }) => active ? theme.colors.white : theme.colors.darkGray};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animation.normal} ease;

  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.mediumGray};
  }
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ProgramCard = styled.div`
  height: 100%;
`;

const ProgramCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ProgramDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const ProgramDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const DetailLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const DetailValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  text-transform: capitalize;
`;

const ProgramDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProgramCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FeaturedBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[10]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const NoResultsText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const CustomProgramContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({ theme }) => theme.spacing[10]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const CustomProgramContent = styled.div`
  h2, p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const CustomProgramText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const CustomProgramImage = styled.div`
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export default Programs;
