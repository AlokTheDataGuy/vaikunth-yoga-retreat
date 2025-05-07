import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteRight } from 'react-icons/fa';

// Components
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import TestimonialCard from './TestimonialCard';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'My experience at Vaikunth Yoga Retreat was truly transformative. The serene environment, expert instructors, and holistic approach to wellness helped me reconnect with myself in ways I never thought possible.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    featured: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    text: 'The meditation retreat exceeded all my expectations. The peaceful Himalayan setting and the authentic yoga practices have given me tools that I continue to use in my daily life.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'London, UK',
    text: 'As a yoga instructor myself, I was impressed by the depth of knowledge and the traditional approach at Vaikunth. The Ayurvedic treatments and personalized attention made this a standout experience.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'David Wilson',
    location: 'Sydney, Australia',
    text: 'The Himalayan trek combined with daily yoga sessions was the perfect balance of adventure and mindfulness. The accommodations were comfortable and the food was exceptional.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  }
];

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const featuredTestimonial = testimonials.find(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured).slice(0, 3);

  return (
    <Section $variant="light" ref={ref}>
      <TestimonialsContainer>
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Testimonials"
          align="center"
        />
        
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Featured Testimonial */}
          {featuredTestimonial && (
            <motion.div variants={itemVariants}>
              <FeaturedTestimonialWrapper>
                <TestimonialCard 
                  testimonial={featuredTestimonial} 
                  variant="featured" 
                />
              </FeaturedTestimonialWrapper>
            </motion.div>
          )}
          
          {/* Regular Testimonials */}
          <TestimonialsGrid>
            {regularTestimonials.map(testimonial => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </TestimonialsGrid>
          
          <ButtonContainer>
            <Button to="/testimonials" variant="outline">
              View All Testimonials
            </Button>
          </ButtonContainer>
        </motion.div>
      </TestimonialsContainer>
    </Section>
  );
};

// Styled Components
const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturedTestimonialWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[10]};
`;

export default TestimonialsSection;
