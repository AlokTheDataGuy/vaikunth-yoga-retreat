import React, { useState } from 'react';
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
        $fullWidth={true}
        $overlay={true}
        ref={heroRef}
      >
        <div className="hero-content">
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
            <p className="hero-text">
              Discover the transformative journeys of our guests from around the world
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section ref={contentRef}>
        <motion.div
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="testimonials-wrapper"
        >
          <div className="testimonials-container">
            {/* Filters */}
            <div className="filters-container">
              <div className="filter-group">
                <div className="filter-label">
                  <FaFilter />
                  <span>Filter by Program:</span>
                </div>
                <div className="program-filters">
                  {programCategories.map(program => (
                    <button
                      key={program}
                      className={`filter-button ${activeFilter === program ? 'active' : ''}`}
                      onClick={() => setActiveFilter(program)}
                    >
                      {program}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <div className="filter-label">
                  <FaStar />
                  <span>Filter by Rating:</span>
                </div>
                <div className="rating-filters">
                  <button
                    className={`filter-button ${activeRating === 0 ? 'active' : ''}`}
                    onClick={() => setActiveRating(0)}
                  >
                    All Ratings
                  </button>
                  {[5, 4, 3].map(rating => (
                    <button
                      key={rating}
                      className={`filter-button ${activeRating === rating ? 'active' : ''}`}
                      onClick={() => setActiveRating(rating)}
                    >
                      {rating}+ Stars
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            {filteredTestimonials.length > 0 ? (
              <motion.div variants={staggerContainer}>
                <div className="testimonials-grid">
                  {filteredTestimonials.map(testimonial => (
                    <motion.div key={testimonial.id} variants={fadeIn} className="testimonial-card-wrapper">
                      <TestimonialCard 
                        testimonial={testimonial} 
                        variant={testimonial.id === 1 ? 'featured' : 'default'} 
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="no-results-message">
                No testimonials match your current filters. Please try different criteria.
              </div>
            )}
          </div>
        </motion.div>
      </Section>

      <style jsx>{`
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 4rem 0;
        }
        
        .hero-text {
          font-size: 1.25rem;
          color: #fff;
          margin-top: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .testimonials-wrapper {
          width: 100%;
        }
        
        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 1rem;
        }
        
        .filters-container {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }
        
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        
        .filter-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: #4a5568;
          margin-bottom: 0.5rem;
        }
        
        .filter-label svg {
          color: #2d6a4f;
        }
        
        .program-filters,
        .rating-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          width: 100%;
        }
        
        .filter-button {
          padding: 0.5rem 1rem;
          background-color: #f7fafc;
          color: #4a5568;
          border: none;
          border-radius: 9999px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .filter-button:hover {
          background-color: #edf2f7;
        }
        
        .filter-button.active {
          background-color: #2d6a4f;
          color: #ffffff;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          width: 100%;
        }
        
        .testimonial-card-wrapper {
          height: 100%;
        }
        
        .no-results-message {
          text-align: center;
          padding: 2.5rem;
          font-size: 1.125rem;
          color: #a0aec0;
        }
        
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }
        
        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            padding: 3rem 0;
          }
          
          .hero-text {
            font-size: 1.125rem;
          }
          
          .filters-container {
            gap: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .filter-group {
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-content {
            padding: 2rem 0;
            max-width: 90%;
          }
          
          .hero-text {
            font-size: 1rem;
          }
          
          .testimonials-container {
            padding: 0 0.75rem;
          }
          
          .filters-container {
            gap: 0.75rem;
            margin-bottom: 1rem;
          }
          
          .filter-label {
            font-size: 0.875rem;
          }
          
          .program-filters,
          .rating-filters {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.5rem;
            margin-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            width: calc(100% + 1.5rem);
            margin-left: -0.75rem;
            padding-left: 0.75rem;
          }
          
          .program-filters::-webkit-scrollbar,
          .rating-filters::-webkit-scrollbar {
            display: none;
          }
          
          .filter-button {
            flex-shrink: 0;
            font-size: 0.75rem;
            padding: 0.375rem 0.75rem;
          }
          
          .testimonials-grid {
            gap: 1rem;
          }
          
          .no-results-message {
            padding: 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
};

export default TestimonialsPage;