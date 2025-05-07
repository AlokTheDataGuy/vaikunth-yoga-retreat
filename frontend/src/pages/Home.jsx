import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaMountain, FaYinYang } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import BlogPreview from '../components/blog/BlogPreview';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

// Utils
import { getCategoryPlaceholder, getImageUrl } from '../utils/imageUtils';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Ancient Wisdom of Yoga Philosophy',
    slug: 'ancient-wisdom-yoga-philosophy',
    excerpt: 'Explore the philosophical foundations of yoga and how they can transform your practice and daily life.',
    featuredImage: '/assets/images/blog.png',
    category: 'yoga',
    author: {
      name: 'Guru Amrit',
      avatar: getImageUrl('/assets/images/team/guru-amrit.jpg', 100, 100)
    },
    publishedAt: '2023-05-15T10:30:00Z',
    readTime: 8
  },
  {
    id: 2,
    title: 'Meditation Techniques for Beginners',
    slug: 'meditation-techniques-beginners',
    excerpt: 'Simple yet powerful meditation techniques that anyone can practice to find inner peace and mental clarity.',
    featuredImage: '/assets/images/blog.png',
    category: 'meditation',
    author: {
      name: 'Dr. Priya Sharma',
      avatar: getImageUrl('/assets/images/team/dr-priya.jpg', 100, 100)
    },
    publishedAt: '2023-06-02T14:15:00Z',
    readTime: 6
  },
  {
    id: 3,
    title: 'Ayurvedic Principles for Seasonal Wellness',
    slug: 'ayurvedic-principles-seasonal-wellness',
    excerpt: 'How to adapt your diet and lifestyle according to Ayurvedic wisdom for optimal health throughout the changing seasons.',
    featuredImage: '/assets/images/blog.png',
    category: 'ayurveda',
    author: {
      name: 'Vaidya Raj Kumar',
      avatar: getImageUrl('/assets/images/team/default.jpg', 100, 100)
    },
    publishedAt: '2023-06-20T09:45:00Z',
    readTime: 10
  }
];

const Home = () => {
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

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Intersection observer hooks for animations
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [programsRef, programsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [blogRef, blogInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Sample data for programs
  const featuredPrograms = [
    {
      id: 1,
      title: '200-Hour Yoga Teacher Training',
      subtitle: 'Jun 15 - Jul 10, 2023',
      image: getImageUrl('/assets/images/programs/teacher-training.jpg', 800, 600),
      content: 'Immerse yourself in a transformative journey to become a certified yoga instructor in the serene Himalayan mountains.',
      trending: true
    },
    {
      id: 2,
      title: 'Meditation & Mindfulness Retreat',
      subtitle: 'Jul 20 - Jul 27, 2023',
      image: getImageUrl('/assets/images/programs/meditation-retreat.jpg', 800, 600),
      content: 'Discover inner peace and mental clarity through guided meditation practices and mindfulness techniques.',
      limited: true
    },
    {
      id: 3,
      title: 'Ayurvedic Panchakarma Cleanse',
      subtitle: 'Aug 5 - Aug 19, 2023',
      image: getCategoryPlaceholder('yoga', 800, 600),
      content: 'Experience the ancient healing system of Ayurveda with personalized treatments and cleansing therapies.',
    },
    {
      id: 4,
      title: 'Himalayan Trek & Yoga Adventure',
      subtitle: 'Sep 10 - Sep 20, 2023',
      image: getCategoryPlaceholder('nature', 800, 600),
      content: 'Combine the thrill of Himalayan trekking with rejuvenating yoga practices for an unforgettable adventure.',
      trending: true
    }
  ];



  return (
    <main>
      {/* Hero Section */}
      <HeroSection backgroundImage={getImageUrl('/assets/images/hero-bg.jpg', 1920, 1080)} fullWidth>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <HeroHeading>
              {/* <LogoText>
                <VaikunthText>VAIKUNTH</VaikunthText>
                <YogaRetreatText>YOGA RETREAT</YogaRetreatText>
              </LogoText> */}
              Vaikunth Yoga Retreat
            </HeroHeading>
            <HeroSubheading>A Journey to Wholeness in the Himalayas</HeroSubheading>
            <HeroText>
              Yoga. Healing. Nature. Spiritual Awakening. All in one divine Himalayan escape.
            </HeroText>
            <HeroButtons>
              <Button to="/booking" size="large" variant="accent">
                Reserve Your Retreat
              </Button>
              <Button to="/programs" size="large" variant="outline">
                Explore Our Programs
              </Button>
            </HeroButtons>
          </motion.div>
        </HeroContent>
        <ScrollIndicator>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ textAlign: 'center', width: '100%' }}
          >
            {/* <ScrollLine /> */}
            {/* <ScrollText>Discover</ScrollText>
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}> */}
            {/* <ScrollText style={{
                transform: 'rotate(180deg)',
                display: 'inline-block',
                fontSize: '1.5rem',
                lineHeight: '1'
              }}>^</ScrollText> */}
            {/* </div> */}
          </motion.div>
        </ScrollIndicator>
      </HeroSection>

      {/* Introduction Section */}
      <Section>
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Welcome to Vaikunth"
            subtitle="A Sanctuary for Mind, Body & Soul"
          />

          <IntroContent>
            <IntroText>
              <p>
                Nestled at an elevation of 10,000 feet in the majestic Himalayas, Vaikunth Yoga Retreat offers a transformative escape from the ordinary. For over 15 years, we have guided seekers on their journey to wellness, spiritual growth, and self-discovery.
              </p>
              <p>
                Our retreat combines ancient yogic wisdom with modern wellness practices, all within the embrace of pristine nature. Here, the mountains aren't just a backdrop—they're your teachers, offering profound lessons in stillness, strength, and perspective.
              </p>
              <Button to="/about" variant="text">
                Learn more about our story →
              </Button>
            </IntroText>
            <IntroStats>
              <StatItem>
                <StatNumber>10,000+</StatNumber>
                <StatLabel>Feet Above Sea Level</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>15+</StatNumber>
                <StatLabel>Years of Experience</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>5,000+</StatNumber>
                <StatLabel>Lives Transformed</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>20+</StatNumber>
                <StatLabel>Expert Instructors</StatLabel>
              </StatItem>
            </IntroStats>
          </IntroContent>
        </motion.div>
      </Section>

      {/* Benefits Section */}
      <Section variant="light">
        <motion.div
          ref={benefitsRef}
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading
            title="Why Choose Vaikunth"
            subtitle="The Benefits"
          />

          <BenefitsGrid>
            <motion.div variants={fadeIn}>
              <BenefitCard>
                <BenefitIcon>
                  <FaLeaf />
                </BenefitIcon>
                <BenefitTitle>Natural Healing</BenefitTitle>
                <BenefitText>
                  Experience the healing power of pristine Himalayan nature, fresh mountain air, and mineral-rich spring water.
                </BenefitText>
              </BenefitCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <BenefitCard>
                <BenefitIcon>
                  <FaHeart />
                </BenefitIcon>
                <BenefitTitle>Holistic Wellness</BenefitTitle>
                <BenefitText>
                  Our integrated approach addresses physical, mental, emotional, and spiritual dimensions of wellbeing.
                </BenefitText>
              </BenefitCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <BenefitCard>
                <BenefitIcon>
                  <FaMountain />
                </BenefitIcon>
                <BenefitTitle>Spiritual Growth</BenefitTitle>
                <BenefitText>
                  Connect with your higher self through meditation, pranayama, and ancient spiritual practices.
                </BenefitText>
              </BenefitCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <BenefitCard>
                <BenefitIcon>
                  <FaYinYang />
                </BenefitIcon>
                <BenefitTitle>Authentic Traditions</BenefitTitle>
                <BenefitText>
                  Learn from masters who preserve and share authentic yogic and Ayurvedic traditions.
                </BenefitText>
              </BenefitCard>
            </motion.div>
          </BenefitsGrid>
        </motion.div>
      </Section>

      {/* Featured Programs Section - New Implementation */}
      <Section>
        <motion.div
          ref={programsRef}
          initial="hidden"
          animate={programsInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Upcoming Retreats & Programs"
            subtitle="Transform Your Life"
            size="small"
          />

          <ProgramsWrapper>
            <ProgramsGrid>
              {featuredPrograms.map((program) => (
                <ProgramCard key={program.id}>
                  <ProgramImageWrapper>
                    <ProgramImage src={program.image} alt={program.title} />
                    {program.trending && <TrendingBadge>Trending</TrendingBadge>}
                    {program.limited && <LimitedBadge>Limited Space</LimitedBadge>}
                  </ProgramImageWrapper>
                  <ProgramContent>
                    <ProgramTitle>{program.title}</ProgramTitle>
                    <ProgramDate>{program.subtitle}</ProgramDate>
                    <ProgramDescription>{program.content}</ProgramDescription>
                    <ProgramButton to={`/programs/${program.id}`}>
                      View Details →
                    </ProgramButton>
                  </ProgramContent>
                </ProgramCard>
              ))}
            </ProgramsGrid>
          </ProgramsWrapper>

          <ButtonContainer>
            <Button to="/programs" variant="outline">
              View All Programs
            </Button>
          </ButtonContainer>
        </motion.div>
      </Section>

      {/* Gallery Section */}
      <Section variant="light">
        <motion.div
          ref={galleryRef}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Experience Vaikunth"
            subtitle="Visual Stories"
          />

          <GalleryGrid>
            <GalleryItem className="large">
              <GalleryImage src={getCategoryPlaceholder('yoga', 1200, 800)} alt="Yoga at sunrise" />
              <GalleryOverlay>
                <GalleryQuote>
                  "The peace I found at Vaikunth stays with me long after I've returned home."
                </GalleryQuote>
              </GalleryOverlay>
            </GalleryItem>
            <GalleryItem>
              <GalleryImage src={getCategoryPlaceholder('yoga', 800, 800)} alt="Meditation session" />
            </GalleryItem>
            <GalleryItem>
              <GalleryImage src={getCategoryPlaceholder('nature', 800, 800)} alt="Himalayan views" />
            </GalleryItem>
            <GalleryItem>
              <GalleryImage src={getCategoryPlaceholder('yoga', 800, 800)} alt="Ayurvedic treatment" />
            </GalleryItem>
            <GalleryItem className="vertical">
              <GalleryImage src={getCategoryPlaceholder('yoga', 800, 1200)} alt="Yoga pose" />
              <GalleryOverlay>
                <GalleryQuote>
                  "I discovered strengths I never knew I had."
                </GalleryQuote>
              </GalleryOverlay>
            </GalleryItem>
            <GalleryItem>
              <GalleryImage src={getCategoryPlaceholder('nature', 800, 800)} alt="Group hiking" />
            </GalleryItem>
          </GalleryGrid>

          <ButtonContainer>
            <Button to="/testimonials" variant="outline">
              Read Success Stories
            </Button>
          </ButtonContainer>
        </motion.div>
      </Section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <Section ref={blogRef} $variant="light">
        <motion.div
          initial="hidden"
          animate={blogInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Wisdom & Insights"
            subtitle="From Our Blog"
            color="primary"
          />

          <BlogGrid>
            {blogPosts.map(post => (
              <BlogPreview
                key={post.id}
                post={post}
                formatDate={formatDate}
              />
            ))}
          </BlogGrid>

          <ButtonContainer>
            <Button to="/blog" variant="outline">
              View All Articles
            </Button>
          </ButtonContainer>
        </motion.div>
      </Section>

      {/* Newsletter Section */}
      <Section $variant="primary">
        <NewsletterContainer>
          <NewsletterContent>
            <SectionHeading
              title="Join Our Community"
              subtitle="Stay Connected"
              align="left"
              color="light"
              withDivider={false}
            />
            <NewsletterText>
              Subscribe to receive exclusive meditation guides, retreat updates, and wellness wisdom from our Himalayan sanctuary.
            </NewsletterText>
          </NewsletterContent>

          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your email address" />
            <Button variant="accent">Subscribe</Button>
          </NewsletterForm>
        </NewsletterContainer>
      </Section>
    </main>
  );
};

// Styled Components
const HeroSection = styled(Section)`
  height: 100vh;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  overflow: hidden;

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

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  width: 100%;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }

  @media (max-width: 400px) {
    font-size: calc(${({ theme }) => theme.typography.fontSize['2xl']} + 0.5rem);
  }
`;

const HeroSubheading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  width: 100%;
  line-height: 1.4;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const HeroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  max-width: 700px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    line-height: 1.5;
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  width: auto;
`;

// const ScrollLine = styled.div`
//   width: 2px;
//   height: 60px;
//   background-color: ${({ theme }) => theme.colors.white};
//   margin-bottom: ${({ theme }) => theme.spacing[2]};
// `;

export const ScrollText = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const IntroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const IntroText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const IntroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const BenefitsGrid = styled.div`
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

const BenefitCard = styled.div`
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

const BenefitIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const BenefitTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.primary};
`;

const BenefitText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;



// Programs Section Styled Components
const ProgramsWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
  }
`;

const ProgramsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  width: 100%;

  /* Default to single column for mobile */
  grid-template-columns: 1fr;
  padding: 0 ${({ theme }) => theme.spacing[4]};

  /* Switch to multi-column for larger screens */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;



const ProgramCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProgramImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px; /* Even taller image area */
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 200px;
  }
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProgramCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProgramContent = styled.div`
  padding: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 220px; /* Ensure content area has minimum height */

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[6]};
    min-height: 200px;
  }
`;

const ProgramTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const ProgramDate = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const ProgramDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex-grow: 1;
`;

const ProgramButton = styled(Button)`
  align-self: flex-start;
`;

const TrendingBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  z-index: 1;
`;

const LimitedBadge = styled(TrendingBadge)`
  background-color: ${({ theme }) => theme.colors.primary};
  top: ${({ theme }) => theme.spacing[12]};
`;



const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[10]};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: ${({ theme }) => theme.spacing[4]};

  .large {
    grid-column: span 2;
  }

  .vertical {
    grid-row: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);

    .large {
      grid-column: span 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 200px);
    gap: ${({ theme }) => theme.spacing[3]};

    .vertical {
      grid-row: span 1;
    }
  }

  @media (max-width: 400px) {
    grid-template-rows: repeat(6, 180px);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(42, 93, 69, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]};
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const GalleryQuote = styled.blockquote`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const NewsletterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[10]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const NewsletterContent = styled.div`
  h2, p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const NewsletterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  background-color: white;
  color: ${({ theme }) => theme.colors.charcoal};
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
    width: 100%;
  }
`;



// const LogoText = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
// `;

// const VaikunthText = styled.div`
//   font-family: 'Playfair Display', serif;
//   font-size: 5rem;
//   font-weight: 700;
//   color: #E29C45; /* Golden color for VAIKUNTH */
//   letter-spacing: 0.1em;
//   line-height: 1.1;
//   text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);

//   @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
//     font-size: 4rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     font-size: 3.5rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     font-size: 2.5rem;
//   }
// `;

// const YogaRetreatText = styled.div`
//   font-family: 'Poppins', sans-serif;
//   font-size: 2.5rem;
//   font-weight: 500;
//   color: #5C8D76; /* Forest green color for YOGA RETREAT */
//   letter-spacing: 0.3em;
//   margin-top: 0.5rem;
//   text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

//   @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
//     font-size: 2rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     font-size: 1.8rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     font-size: 1.5rem;
//     letter-spacing: 0.2em;
//   }
// `;

export default Home;
