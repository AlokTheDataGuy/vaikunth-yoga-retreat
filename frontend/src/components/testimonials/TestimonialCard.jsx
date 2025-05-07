import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, variant = 'default' }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} $filled={i < rating}>
        <FaStar />
      </Star>
    ));
  };

  if (variant === 'featured') {
    return (
      <FeaturedCard
        as={motion.div}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <FeaturedQuoteIcon>
          <FaQuoteLeft />
        </FeaturedQuoteIcon>
        <FeaturedContent>
          <FeaturedText>{testimonial.text}</FeaturedText>
          <FeaturedRating>{renderStars(testimonial.rating)}</FeaturedRating>
          <FeaturedAuthorContainer>
            <FeaturedAuthorImage src={testimonial.image} alt={testimonial.name} />
            <FeaturedAuthorInfo>
              <FeaturedAuthorName>{testimonial.name}</FeaturedAuthorName>
              <FeaturedAuthorLocation>{testimonial.location}</FeaturedAuthorLocation>
            </FeaturedAuthorInfo>
          </FeaturedAuthorContainer>
        </FeaturedContent>
      </FeaturedCard>
    );
  }

  return (
    <Card
      as={motion.div}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      <Content>
        <Text>{testimonial.text}</Text>
        <Rating>{renderStars(testimonial.rating)}</Rating>
        <AuthorContainer>
          <AuthorImage src={testimonial.image} alt={testimonial.name} />
          <AuthorInfo>
            <AuthorName>{testimonial.name}</AuthorName>
            <AuthorLocation>{testimonial.location}</AuthorLocation>
          </AuthorInfo>
        </AuthorContainer>
      </Content>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing[6]};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  opacity: 0.5;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex: 1;
`;

const Rating = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Star = styled.span`
  color: ${({ $filled, theme }) => 
    $filled ? theme.colors.accent : theme.colors.gray[300]};
  margin-right: ${({ theme }) => theme.spacing[1]};
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
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const AuthorLocation = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

// Featured Variant Styles
const FeaturedCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const FeaturedQuoteIcon = styled(QuoteIcon)`
  color: ${({ theme }) => theme.colors.white};
`;

const FeaturedContent = styled(Content)``;

const FeaturedText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const FeaturedRating = styled(Rating)``;

const FeaturedAuthorContainer = styled(AuthorContainer)``;

const FeaturedAuthorImage = styled(AuthorImage)``;

const FeaturedAuthorInfo = styled(AuthorInfo)``;

const FeaturedAuthorName = styled(AuthorName)`
  color: ${({ theme }) => theme.colors.white};
`;

const FeaturedAuthorLocation = styled(AuthorLocation)`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`;

export default TestimonialCard;
