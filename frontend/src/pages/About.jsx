import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// Utils
import { getCategoryPlaceholder, getImageUrl } from '../utils/imageUtils';

const About = () => {
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

  // Intersection observer hooks for animations
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [locationRef, locationInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: 'Guru Amrit Singh',
      role: 'Founder & Lead Yoga Instructor',
      image: getImageUrl('/assets/images/team/guru-amrit.jpg', 600, 800),
      bio: 'With over 30 years of experience in traditional Hatha and Kundalini yoga, Guru Amrit brings authentic teachings and spiritual wisdom to every session.',
      specialty: 'Kundalini Yoga, Meditation'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      role: 'Ayurvedic Physician',
      image: getImageUrl('/assets/images/team/dr-priya.jpg', 600, 800),
      bio: 'A certified Ayurvedic doctor with expertise in Panchakarma and herbal medicine, Dr. Priya creates personalized wellness plans for each guest.',
      specialty: 'Panchakarma, Herbal Remedies'
    },
    {
      id: 3,
      name: 'Mohan Joshi',
      role: 'Meditation Guide',
      image: getCategoryPlaceholder('/assets/images/team/mohan.jpg', 600, 800),
      bio: 'After spending 12 years meditating in Himalayan caves, Mohan shares profound techniques for inner peace and spiritual awakening.',
      specialty: 'Vipassana, Transcendental Meditation'
    },
    {
      id: 4,
      name: 'Neerja Singh',
      role: 'Yoga Instructor',
      image: getCategoryPlaceholder('/assets/images/team/neerja.jpg', 600, 800),
      bio: 'Internationally certified in multiple yoga styles, Neerja specializes in making yoga accessible to practitioners of all levels and abilities.',
      specialty: 'Hatha Yoga, Yin Yoga'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <PageHero backgroundImage={getImageUrl('/assets/images/about-hero.jpg', 1920, 800)}>
        <PageHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageHeroHeading>About Vaikunth</PageHeroHeading>
            <PageHeroSubheading>Our Story, Mission & Vision</PageHeroSubheading>
          </motion.div>
        </PageHeroContent>
      </PageHero>

      {/* Origin Story Section */}
      <Section>
        <motion.div
          ref={storyRef}
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Our Journey"
            subtitle="The Origin Story"
          />

          <StoryContainer>
            <StoryImage>
              <img src={getCategoryPlaceholder('people', 800, 1000)} alt="Founder Guru Amrit Singh" />
            </StoryImage>

            <StoryContent>
              <StoryText>
                <p>
                  Vaikunth Yoga Retreat was born from a profound spiritual awakening experienced by our founder, Guru Amrit Singh, during his solitary meditation in the Himalayan mountains near Auli in 2005.
                </p>
                <p>
                  After years of studying with yoga masters across India, Amrit was drawn to the serene energy of this particular mountain slope. During a 40-day meditation, he experienced a vision of creating a sanctuary where seekers from around the world could connect with the transformative power of the Himalayas.
                </p>
                <p>
                  Starting with just a small cottage and three dedicated students, Vaikunth has grown organically over the years into a world-renowned retreat center. Yet, we've maintained our commitment to small group sizes, personalized attention, and authentic teachings.
                </p>
                <p>
                  The name "Vaikunth" comes from ancient Sanskrit, referring to a state of ultimate bliss and liberation—the very experience we aim to facilitate for our guests.
                </p>
              </StoryText>

              <MissionVision>
                <MissionCard>
                  <MissionTitle>Our Mission</MissionTitle>
                  <MissionText>
                    To create a sacred space where individuals can reconnect with their true nature through authentic yogic practices, Ayurvedic healing, and the profound energy of the Himalayas.
                  </MissionText>
                </MissionCard>

                <VisionCard>
                  <VisionTitle>Our Vision</VisionTitle>
                  <VisionText>
                    A world where more people live in harmony with nature, themselves, and others—carrying the peace and wisdom of the mountains into their daily lives and communities.
                  </VisionText>
                </VisionCard>
              </MissionVision>
            </StoryContent>
          </StoryContainer>
        </motion.div>
      </Section>

      {/* Timeline Section */}
      <Section variant="light">
        <SectionHeading
          title="Our Evolution"
          subtitle="Key Milestones"
        />

        <Timeline>
          <TimelineItem>
            <TimelineYear>2005</TimelineYear>
            <TimelineContent>
              <TimelineTitle>The Beginning</TimelineTitle>
              <TimelineText>
                Guru Amrit Singh establishes the first meditation hut on our current property.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2008</TimelineYear>
            <TimelineContent>
              <TimelineTitle>First Yoga Teacher Training</TimelineTitle>
              <TimelineText>
                We conduct our first 200-hour yoga teacher training with 7 international students.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2012</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Ayurvedic Center</TimelineTitle>
              <TimelineText>
                Opening of our dedicated Ayurvedic treatment center with Dr. Priya Sharma joining the team.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2015</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Eco-Friendly Expansion</TimelineTitle>
              <TimelineText>
                Completion of our solar-powered accommodation buildings using traditional Himalayan architecture.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2018</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Community Outreach</TimelineTitle>
              <TimelineText>
                Launch of our scholarship program for local youth and yoga teachers from underserved communities.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineYear>2023</TimelineYear>
            <TimelineContent>
              <TimelineTitle>Present Day</TimelineTitle>
              <TimelineText>
                Vaikunth now welcomes over 500 guests annually from 40+ countries while maintaining our intimate, personalized approach.
              </TimelineText>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* Location Section */}
      <Section>
        <motion.div
          ref={locationRef}
          initial="hidden"
          animate={locationInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Our Sacred Location"
            subtitle="Auli, Uttarakhand"
          />

          <LocationContainer>
            <LocationMap>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27667.81713126514!2d79.55989716551828!3d30.530195726064378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a79c32a24e8fdb%3A0x9a14ababee539f3f!2sAuli%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auli Map"
              ></iframe>
            </LocationMap>

            <LocationInfo>
              <LocationFeatures>
                <LocationFeature>
                  <FeatureTitle>Elevation</FeatureTitle>
                  <FeatureValue>10,000 ft</FeatureValue>
                </LocationFeature>

                <LocationFeature>
                  <FeatureTitle>Climate</FeatureTitle>
                  <FeatureValue>Alpine</FeatureValue>
                </LocationFeature>

                <LocationFeature>
                  <FeatureTitle>Nearest Airport</FeatureTitle>
                  <FeatureValue>Dehradun (180 km)</FeatureValue>
                </LocationFeature>

                <LocationFeature>
                  <FeatureTitle>Nearest Town</FeatureTitle>
                  <FeatureValue>Joshimath (16 km)</FeatureValue>
                </LocationFeature>
              </LocationFeatures>

              <LocationDescription>
                <p>
                  Nestled in the Garhwal Himalayas, Auli is renowned for its pristine natural beauty, panoramic mountain views, and spiritual significance. The area has been a meditation spot for sages and yogis for thousands of years.
                </p>
                <p>
                  Our retreat is situated on a gentle slope facing the majestic Nanda Devi peak (India's second-highest mountain), surrounded by ancient oak and deodar forests. The pure mountain air, mineral-rich spring water, and abundant negative ions create an ideal environment for healing and transformation.
                </p>
                <p>
                  While remote enough to offer true serenity, Vaikunth is still accessible via a scenic drive from major cities or a combination of train and road travel.
                </p>
              </LocationDescription>

              <Button to="/contact#getting-here" variant="outline">
                View Travel Information
              </Button>
            </LocationInfo>
          </LocationContainer>
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section variant="light">
        <motion.div
          ref={teamRef}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading
            title="Meet Our Guides"
            subtitle="Our Expert Team"
          />

          <TeamGrid>
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={fadeIn}>
                <TeamCard>
                  <TeamImageWrapper>
                    <TeamImage src={member.image} alt={member.name} />
                  </TeamImageWrapper>
                  <TeamInfo>
                    <TeamName>{member.name}</TeamName>
                    <TeamRole>{member.role}</TeamRole>
                    <TeamBio>{member.bio}</TeamBio>
                    <TeamSpecialty>
                      <SpecialtyLabel>Specialties:</SpecialtyLabel>
                      <SpecialtyValue>{member.specialty}</SpecialtyValue>
                    </TeamSpecialty>
                  </TeamInfo>
                </TeamCard>
              </motion.div>
            ))}
          </TeamGrid>

          <ButtonContainer>
            <Button to="/contact" variant="outline">
              Connect With Our Team
            </Button>
          </ButtonContainer>
        </motion.div>
      </Section>

      {/* Philosophy Section */}
      <Section variant="primary">
        <PhilosophyContainer>
          <PhilosophyHeading>
            <SectionHeading
              title="The Vaikunth Philosophy"
              subtitle="Our Approach"
              withDivider={false}
            />
          </PhilosophyHeading>

          <PhilosophyContent>
            <PhilosophyItem>
              <PhilosophyNumber>01</PhilosophyNumber>
              <PhilosophyTitle>Authentic Tradition</PhilosophyTitle>
              <PhilosophyText>
                We honor and preserve the ancient lineages of yoga and Ayurveda, teaching practices in their traditional form while making them accessible to modern practitioners.
              </PhilosophyText>
            </PhilosophyItem>

            <PhilosophyItem>
              <PhilosophyNumber>02</PhilosophyNumber>
              <PhilosophyTitle>Nature Connection</PhilosophyTitle>
              <PhilosophyText>
                We believe in the healing power of nature and integrate the Himalayan environment into all aspects of our programs, from outdoor meditation to herb gathering.
              </PhilosophyText>
            </PhilosophyItem>

            <PhilosophyItem>
              <PhilosophyNumber>03</PhilosophyNumber>
              <PhilosophyTitle>Holistic Integration</PhilosophyTitle>
              <PhilosophyText>
                Rather than compartmentalizing wellness, we address the whole person—physical, mental, emotional, and spiritual—through integrated practices.
              </PhilosophyText>
            </PhilosophyItem>

            <PhilosophyItem>
              <PhilosophyNumber>04</PhilosophyNumber>
              <PhilosophyTitle>Sustainable Living</PhilosophyTitle>
              <PhilosophyText>
                We demonstrate ecological mindfulness through our operations, teaching guests how spiritual practice and environmental stewardship are interconnected.
              </PhilosophyText>
            </PhilosophyItem>
          </PhilosophyContent>
        </PhilosophyContainer>
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

const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled.div`
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const StoryText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const MissionVision = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const MissionTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.white};
`;

const MissionText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: 0;
`;

const VisionCard = styled(MissionCard)`
  background-color: ${({ theme }) => theme.colors.accent};
`;

const VisionTitle = styled(MissionTitle)``;

const VisionText = styled(MissionText)``;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[6]} 0;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 80px;
  }
`;

const TimelineYear = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  z-index: 1;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80px;
    height: 80px;
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    position: absolute;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  width: calc(50% - 80px);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const TimelineTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.primary};
`;

const TimelineText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: 0;
`;

const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const LocationMap = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const LocationFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LocationFeature = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const FeatureTitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const FeatureValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

const LocationDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const TeamImageWrapper = styled.div`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 300px;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TeamInfo = styled.div`
  width: 60%;
  padding: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const TeamName = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.primary};
`;

const TeamRole = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const TeamBio = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const TeamSpecialty = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const SpecialtyLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const SpecialtyValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[10]};
`;

const PhilosophyContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const PhilosophyHeading = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[10]};

  h2, p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const PhilosophyContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PhilosophyItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const PhilosophyNumber = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const PhilosophyTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const PhilosophyText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0;
`;

export default About;
