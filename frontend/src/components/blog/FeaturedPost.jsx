import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturedPost = ({ post, formatDate }) => {
  return (
    <FeaturedWrapper
      as={motion.div}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <FeaturedImageWrapper to={`/blog/${post.slug}`}>
        <FeaturedImage src={post.featuredImage} alt={post.title} />
        <FeaturedBadge>Featured</FeaturedBadge>
        <CategoryBadge>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</CategoryBadge>
      </FeaturedImageWrapper>
      
      <FeaturedContent>
        <FeaturedTitle to={`/blog/${post.slug}`}>{post.title}</FeaturedTitle>
        
        <FeaturedMeta>
          <MetaItem>
            <FaCalendarAlt />
            <span>{formatDate(post.publishedAt)}</span>
          </MetaItem>
          <MetaItem>
            <FaUser />
            <span>{post.author.name}</span>
          </MetaItem>
          <MetaItem>
            <FaClock />
            <span>{post.readTime} min read</span>
          </MetaItem>
        </FeaturedMeta>
        
        <FeaturedExcerpt>{post.excerpt}</FeaturedExcerpt>
        
        <ReadMoreButton to={`/blog/${post.slug}`}>
          Read Article
        </ReadMoreButton>
      </FeaturedContent>
    </FeaturedWrapper>
  );
};

// Styled Components
const FeaturedWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeaturedImageWrapper = styled(Link)`
  position: relative;
  display: block;
  height: 300px;
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100%;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${FeaturedImageWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  right: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  z-index: 1;
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  left: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  z-index: 1;
`;

const FeaturedContent = styled.div`
  padding: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
`;

const FeaturedTitle = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-decoration: none;
  line-height: 1.3;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeaturedMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const FeaturedExcerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.6;
  flex: 1;
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export default FeaturedPost;
