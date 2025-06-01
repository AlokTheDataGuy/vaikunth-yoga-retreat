import React from 'react';
import styled from 'styled-components';
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
      <FeaturedCard
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <QuoteIcon>
          <FaQuoteLeft />
        </QuoteIcon>
        <FeaturedContent>
          <FeaturedText>{testimonial.text}</FeaturedText>
          <Rating>{renderStars(testimonial.rating)}</Rating>
          <AuthorContainer>
            <AuthorImage
              src={testimonial.image}
              alt={testimonial.name}
            />
            <AuthorInfo>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorLocation>{testimonial.location}</AuthorLocation>
              {testimonial.program && (
                <AuthorProgram>{testimonial.program}</AuthorProgram>
              )}
            </AuthorInfo>
          </AuthorContainer>
        </FeaturedContent>
      </FeaturedCard>
    );
  }

  return (
    <RegularCard
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      <CardContent>
        <TestimonialText>{testimonial.text}</TestimonialText>
        <Rating>{renderStars(testimonial.rating)}</Rating>
        <AuthorContainer>
          <AuthorImage
            src={testimonial.image}
            alt={testimonial.name}
          />
          <AuthorInfo>
            <AuthorName>{testimonial.name}</AuthorName>
            <AuthorLocation>{testimonial.location}</AuthorLocation>
            {testimonial.program && (
              <AuthorProgram>{testimonial.program}</AuthorProgram>
            )}
          </AuthorInfo>
        </AuthorContainer>
      </CardContent>
    </RegularCard>
  );
};

// Styled Components
const FeaturedCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const RegularCard = styled(motion.div)`
  background-color: white;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.5;

  ${FeaturedCard} & {
    color: white;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const FeaturedContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FeaturedText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 1rem;
  flex: 1;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }
`;

const Rating = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;

  ${FeaturedCard} & {
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[800]};
  margin: 0 0 0.25rem 0;

  ${FeaturedCard} & {
    color: white;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const AuthorLocation = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0 0 0.25rem 0;

  ${FeaturedCard} & {
    color: white;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const AuthorProgram = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0;
  font-style: italic;

  ${FeaturedCard} & {
    color: white;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

// Star component
const StarIcon = styled(FaStar)`
  color: ${({ $filled }) => $filled ? '#f6ad55' : '#cbd5e0'};
  margin-right: 0.25rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export default TestimonialCard;