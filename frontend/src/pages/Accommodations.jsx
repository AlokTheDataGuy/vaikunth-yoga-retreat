import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWifi, FaUtensils, FaShower, FaMountain, FaLeaf, FaYinYang } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// Utils
import { getCategoryPlaceholder, getImageUrl } from '../utils/imageUtils';

const Accommodations = () => {
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
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [roomsRef, roomsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [facilitiesRef, facilitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  // Sample data for accommodations
  const accommodations = [
    {
      id: 1,
      title: 'Deluxe Room',
      image: getCategoryPlaceholder('accommodations', 800, 600),
      description: 'Our spacious deluxe rooms offer a perfect blend of comfort and traditional Himalayan design. Each room features large windows with mountain views, a private bathroom, and comfortable furnishings.',
      price: 'From $120 per night',
      capacity: '2 Guests',
      amenities: ['Private bathroom', 'Mountain view', 'Daily housekeeping', 'Yoga mat', 'Organic toiletries']
    },
    {
      id: 2,
      title: 'Standard Room',
      image: getCategoryPlaceholder('accommodations', 800, 600),
      description: 'Cozy and comfortable, our standard rooms provide a peaceful retreat after a day of activities. Each room is thoughtfully designed with natural materials and traditional touches.',
      price: 'From $90 per night',
      capacity: '2 Guests',
      amenities: ['Private bathroom', 'Daily housekeeping', 'Yoga mat', 'Organic toiletries']
    },
    {
      id: 3,
      title: 'Shared Dormitory',
      image: getCategoryPlaceholder('accommodations', 800, 600),
      description: 'Perfect for solo travelers or those on a budget, our shared dormitories offer comfortable single beds in a communal setting. A great way to connect with like-minded individuals.',
      price: 'From $40 per night',
      capacity: '4-6 Guests',
      amenities: ['Shared bathroom', 'Personal locker', 'Daily housekeeping', 'Yoga mat']
    },
    {
      id: 4,
      title: 'Private Cottage',
      image: getCategoryPlaceholder('accommodations', 800, 600),
      description: 'For those seeking extra privacy and space, our private cottages offer a secluded retreat experience. Each cottage features a bedroom, sitting area, private bathroom, and a small porch with mountain views.',
      price: 'From $150 per night',
      capacity: '2-3 Guests',
      amenities: ['Private bathroom', 'Sitting area', 'Private porch', 'Mountain view', 'Daily housekeeping', 'Yoga mat', 'Organic toiletries', 'Electric kettle']
    }
  ];
  
  // Sample data for facilities
  const facilities = [
    {
      id: 1,
      title: 'Yoga Shala',
      image: getCategoryPlaceholder('yoga', 800, 600),
      description: 'Our spacious, light-filled yoga shala is the heart of the retreat. With panoramic mountain views, wooden floors, and all necessary props, it provides the perfect space for your practice.'
    },
    {
      id: 2,
      title: 'Meditation Hall',
      image: getCategoryPlaceholder('yoga', 800, 600),
      description: 'A serene space dedicated to meditation and inner reflection. The hall features comfortable cushions, subtle lighting, and a peaceful atmosphere conducive to deepening your meditation practice.'
    },
    {
      id: 3,
      title: 'Dining Hall',
      image: getCategoryPlaceholder('food', 800, 600),
      description: 'Our community dining hall serves nutritious, organic vegetarian meals three times daily. The space features large communal tables to encourage connection and conversation among guests.'
    },
    {
      id: 4,
      title: 'Ayurvedic Center',
      image: getCategoryPlaceholder('yoga', 800, 600),
      description: 'Our Ayurvedic center offers traditional treatments and consultations with our experienced Ayurvedic doctor. The center includes treatment rooms, steam room, and relaxation area.'
    },
    {
      id: 5,
      title: 'Organic Garden',
      image: getCategoryPlaceholder('nature', 800, 600),
      description: 'Much of our food comes directly from our organic garden. Guests are welcome to visit, learn about organic farming practices, and even participate in harvesting if interested.'
    },
    {
      id: 6,
      title: 'Library & Lounge',
      image: getCategoryPlaceholder('accommodations', 800, 600),
      description: 'A cozy space filled with books on yoga, meditation, philosophy, and wellness. The lounge area provides comfortable seating for reading, journaling, or connecting with other guests.'
    }
  ];
  
  return (
    <main>
      {/* Hero Section */}
      <PageHero backgroundImage={getImageUrl('/assets/images/accommodations-hero.jpg', 1920, 800)}>
        <PageHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageHeroHeading>Accommodations</PageHeroHeading>
            <PageHeroSubheading>Your Himalayan Home Away From Home</PageHeroSubheading>
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
            title="Rest & Rejuvenate"
            subtitle="Our Accommodations"
          />
          
          <IntroText>
            <p>
              At Vaikunth Yoga Retreat, we believe that restful sleep and comfortable surroundings are essential to your wellness journey. Our accommodations are designed to provide a peaceful sanctuary where you can recharge after a day of yoga, meditation, and exploration.
            </p>
            <p>
              Each room is thoughtfully designed using natural materials, traditional Himalayan craftsmanship, and eco-friendly practices. From cozy shared dormitories to private cottages, we offer options to suit various preferences and budgets.
            </p>
          </IntroText>
          
          <AmenitiesContainer>
            <AmenityItem>
              <AmenityIcon>
                <FaWifi />
              </AmenityIcon>
              <AmenityTitle>Free WiFi</AmenityTitle>
              <AmenityText>
                Available in common areas (limited hours)
              </AmenityText>
            </AmenityItem>
            
            <AmenityItem>
              <AmenityIcon>
                <FaUtensils />
              </AmenityIcon>
              <AmenityTitle>Organic Meals</AmenityTitle>
              <AmenityText>
                Three vegetarian meals daily
              </AmenityText>
            </AmenityItem>
            
            <AmenityItem>
              <AmenityIcon>
                <FaShower />
              </AmenityIcon>
              <AmenityTitle>Hot Water</AmenityTitle>
              <AmenityText>
                Solar-heated water in all bathrooms
              </AmenityText>
            </AmenityItem>
            
            <AmenityItem>
              <AmenityIcon>
                <FaMountain />
              </AmenityIcon>
              <AmenityTitle>Mountain Views</AmenityTitle>
              <AmenityText>
                Breathtaking Himalayan panoramas
              </AmenityText>
            </AmenityItem>
            
            <AmenityItem>
              <AmenityIcon>
                <FaLeaf />
              </AmenityIcon>
              <AmenityTitle>Eco-Friendly</AmenityTitle>
              <AmenityText>
                Sustainable practices throughout
              </AmenityText>
            </AmenityItem>
            
            <AmenityItem>
              <AmenityIcon>
                <FaYinYang />
              </AmenityIcon>
              <AmenityTitle>Yoga Equipment</AmenityTitle>
              <AmenityText>
                Mats and props provided
              </AmenityText>
            </AmenityItem>
          </AmenitiesContainer>
        </motion.div>
      </Section>

      {/* Accommodations Section */}
      <Section variant="light">
        <motion.div
          ref={roomsRef}
          initial="hidden"
          animate={roomsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading
            title="Room Options"
            subtitle="Find Your Perfect Space"
          />
          
          <AccommodationsGrid>
            {accommodations.map((room) => (
              <motion.div key={room.id} variants={fadeIn}>
                <AccommodationCard>
                  <AccommodationImage>
                    <img src={room.image} alt={room.title} />
                  </AccommodationImage>
                  <AccommodationContent>
                    <AccommodationTitle>{room.title}</AccommodationTitle>
                    <AccommodationDetails>
                      <AccommodationPrice>{room.price}</AccommodationPrice>
                      <AccommodationCapacity>{room.capacity}</AccommodationCapacity>
                    </AccommodationDetails>
                    <AccommodationDescription>
                      {room.description}
                    </AccommodationDescription>
                    <AccommodationAmenities>
                      <AmenitiesTitle>Amenities:</AmenitiesTitle>
                      <AmenitiesList>
                        {room.amenities.map((amenity, index) => (
                          <AmenitiesItem key={index}>{amenity}</AmenitiesItem>
                        ))}
                      </AmenitiesList>
                    </AccommodationAmenities>
                  </AccommodationContent>
                </AccommodationCard>
              </motion.div>
            ))}
          </AccommodationsGrid>
          
          <BookingNote>
            <NoteIcon>ℹ️</NoteIcon>
            <NoteText>
              All accommodation rates include three vegetarian meals daily, access to group yoga classes, and use of retreat facilities. Prices may vary based on season and program selection.
            </NoteText>
          </BookingNote>
          
          <ButtonContainer>
            <Button to="/booking" variant="accent">
              Check Availability & Book
            </Button>
          </ButtonContainer>
        </motion.div>
      </Section>

      {/* Facilities Section */}
      <Section>
        <motion.div
          ref={facilitiesRef}
          initial="hidden"
          animate={facilitiesInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <SectionHeading
            title="Our Facilities"
            subtitle="Spaces for Transformation"
          />
          
          <FacilitiesGrid>
            {facilities.map((facility) => (
              <FacilityCard key={facility.id}>
                <FacilityImage>
                  <img src={facility.image} alt={facility.title} />
                </FacilityImage>
                <FacilityContent>
                  <FacilityTitle>{facility.title}</FacilityTitle>
                  <FacilityDescription>
                    {facility.description}
                  </FacilityDescription>
                </FacilityContent>
              </FacilityCard>
            ))}
          </FacilitiesGrid>
        </motion.div>
      </Section>

      {/* Map Section */}
      <Section variant="light">
        <SectionHeading
          title="Retreat Layout"
          subtitle="Find Your Way Around"
        />
        
        <MapContainer>
          <MapImage>
            <img src={getCategoryPlaceholder('nature', 1200, 800)} alt="Retreat map" />
          </MapImage>
          <MapLegend>
            <LegendTitle>Map Legend</LegendTitle>
            <LegendItems>
              <LegendItem>
                <LegendColor color="#2A5D45" />
                <LegendText>Accommodations</LegendText>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#A4C5D6" />
                <LegendText>Practice Spaces</LegendText>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#E8985E" />
                <LegendText>Dining & Common Areas</LegendText>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#8B6C5C" />
                <LegendText>Ayurvedic Center</LegendText>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#6B9080" />
                <LegendText>Gardens & Nature Spaces</LegendText>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#9D8FB3" />
                <LegendText>Meditation Spots</LegendText>
              </LegendItem>
            </LegendItems>
          </MapLegend>
        </MapContainer>
      </Section>

      {/* Booking CTA Section */}
      <Section variant="primary">
        <CTAContainer>
          <CTAContent>
            <SectionHeading
              title="Ready to Book Your Stay?"
              subtitle="Secure Your Spot"
              align="center"
              withDivider={false}
            />
            <CTAText>
              Our accommodations fill up quickly, especially during peak seasons. Reserve your room now to ensure your place in our upcoming retreats and programs.
            </CTAText>
            <CTAButtons>
              <Button to="/booking" variant="accent" size="large">
                Book Your Stay
              </Button>
              <Button to="/contact" variant="outline" size="large">
                Contact Us With Questions
              </Button>
            </CTAButtons>
          </CTAContent>
        </CTAContainer>
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

const AmenitiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const AmenityItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const AmenityIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const AmenityTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.primary};
`;

const AmenityText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;

const AccommodationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const AccommodationCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AccommodationImage = styled.div`
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${AccommodationCard}:hover & img {
    transform: scale(1.05);
  }
`;

const AccommodationContent = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AccommodationTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.primary};
`;

const AccommodationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const AccommodationPrice = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent};
`;

const AccommodationCapacity = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const AccommodationDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex: 1;
`;

const AccommodationAmenities = styled.div`
  margin-top: auto;
`;

const AmenitiesTitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.primary};
`;

const AmenitiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AmenitiesItem = styled.li`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const BookingNote = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  margin: ${({ theme }) => theme.spacing[8]} 0;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const NoteIcon = styled.div`
  font-size: 1.5rem;
  line-height: 1;
`;

const NoteText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FacilityCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  transition: transform ${({ theme }) => theme.animation.normal} ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FacilityImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${FacilityCard}:hover & img {
    transform: scale(1.05);
  }
`;

const FacilityContent = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`;

const FacilityTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.primary};
`;

const FacilityDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;

const MapContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MapImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const MapLegend = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const LegendTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.primary};
`;

const LegendItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ color }) => color};
`;

const LegendText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CTAContent = styled.div`
  text-align: center;
  
  h2, p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export default Accommodations;
