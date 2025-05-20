import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Pure CSS version without styled-components to avoid theme conflicts
const TestimonialCard = ({ testimonial, variant = 'default' }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`star ${i < rating ? 'filled' : ''}`}
      >
        <FaStar />
      </span>
    ));
  };

  if (variant === 'featured') {
    return (
      <motion.div 
        className="featured-card"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="featured-quote-icon">
          <FaQuoteLeft />
        </div>
        <div className="featured-content">
          <p className="featured-text">{testimonial.text}</p>
          <div className="featured-rating">{renderStars(testimonial.rating)}</div>
          <div className="featured-author-container">
            <img 
              className="featured-author-image" 
              src={testimonial.image} 
              alt={testimonial.name} 
            />
            <div className="featured-author-info">
              <h4 className="featured-author-name">{testimonial.name}</h4>
              <p className="featured-author-location">{testimonial.location}</p>
              {testimonial.program && (
                <p className="featured-author-program">{testimonial.program}</p>
              )}
            </div>
          </div>
        </div>
        <style jsx>{`
          .featured-card {
            background-color: #2d6a4f;
            color: #ffffff;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
          }
          
          .featured-quote-icon {
            color: #ffffff;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            opacity: 0.7;
          }
          
          .featured-content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .featured-text {
            font-size: 1.125rem;
            line-height: 1.6;
            color: #ffffff;
            margin-bottom: 1rem;
            flex: 1;
            font-weight: 500;
          }
          
          .featured-rating {
            display: flex;
            margin-bottom: 1rem;
          }
          
          .featured-author-container {
            display: flex;
            align-items: center;
          }
          
          .featured-author-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 0.75rem;
            border: 2px solid rgba(255, 255, 255, 0.5);
          }
          
          .featured-author-info {
            display: flex;
            flex-direction: column;
          }
          
          .featured-author-name {
            font-size: 1rem;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 0.25rem 0;
          }
          
          .featured-author-location {
            font-size: 0.875rem;
            color: #ffffff;
            opacity: 0.8;
            margin: 0 0 0.25rem 0;
          }
          
          .featured-author-program {
            font-size: 0.875rem;
            color: #ffffff;
            opacity: 0.8;
            margin: 0;
            font-style: italic;
          }
          
          @media (max-width: 768px) {
            .featured-text {
              font-size: 1rem;
            }
          }
          
          @media (max-width: 480px) {
            .featured-card {
              padding: 1rem;
            }
            .featured-quote-icon {
              font-size: 1.25rem;
              margin-bottom: 0.75rem;
            }
            .featured-text {
              font-size: 0.95rem;
              margin-bottom: 0.75rem;
            }
            .featured-author-image {
              width: 40px;
              height: 40px;
              margin-right: 0.5rem;
            }
            .featured-author-name {
              font-size: 0.875rem;
            }
            .featured-author-location,
            .featured-author-program {
              font-size: 0.75rem;
            }
          }
          
          .star {
            color: #cbd5e0;
            margin-right: 0.25rem;
            font-size: 1rem;
          }
          
          .star.filled {
            color: #f6ad55;
          }
          
          @media (max-width: 480px) {
            .star {
              font-size: 0.875rem;
            }
          }
        `}</style>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="quote-icon">
        <FaQuoteLeft />
      </div>
      <div className="content">
        <p className="text">{testimonial.text}</p>
        <div className="rating">{renderStars(testimonial.rating)}</div>
        <div className="author-container">
          <img 
            className="author-image" 
            src={testimonial.image} 
            alt={testimonial.name} 
          />
          <div className="author-info">
            <h4 className="author-name">{testimonial.name}</h4>
            <p className="author-location">{testimonial.location}</p>
            {testimonial.program && (
              <p className="author-program">{testimonial.program}</p>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .quote-icon {
          color: #2d6a4f;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .text {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 1rem;
          flex: 1;
        }
        
        .rating {
          display: flex;
          margin-bottom: 1rem;
        }
        
        .author-container {
          display: flex;
          align-items: center;
        }
        
        .author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 0.75rem;
        }
        
        .author-info {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 0.25rem 0;
        }
        
        .author-location {
          font-size: 0.875rem;
          color: #718096;
          margin: 0 0 0.25rem 0;
        }
        
        .author-program {
          font-size: 0.875rem;
          color: #718096;
          margin: 0;
          font-style: italic;
        }
        
        .star {
          color: #cbd5e0;
          margin-right: 0.25rem;
          font-size: 1rem;
        }
        
        .star.filled {
          color: #f6ad55;
        }
        
        @media (max-width: 768px) {
          .text {
            font-size: 0.95rem;
          }
        }
        
        @media (max-width: 480px) {
          .card {
            padding: 1rem;
          }
          .quote-icon {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }
          .text {
            font-size: 0.875rem;
            line-height: 1.5;
            margin-bottom: 0.75rem;
          }
          .rating {
            margin-bottom: 0.75rem;
          }
          .author-image {
            width: 40px;
            height: 40px;
            margin-right: 0.5rem;
          }
          .author-name {
            font-size: 0.875rem;
          }
          .author-location,
          .author-program {
            font-size: 0.75rem;
          }
          .star {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default TestimonialCard;