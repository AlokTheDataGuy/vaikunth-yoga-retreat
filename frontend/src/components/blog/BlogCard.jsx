import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogCard = ({ post, variant = 'default', formatDate }) => {
  return (
    <CardWrapper
      as={motion.div}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      variant={variant}
    >
      <CardImageWrapper to={`/blog/${post.slug}`}>
        <CardImage src={post.featuredImage} alt={post.title} />
        <CategoryBadge>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</CategoryBadge>
      </CardImageWrapper>
      
      <CardContent>
        <CardTitle to={`/blog/${post.slug}`}>{post.title}</CardTitle>
        
        <CardMeta>
          <MetaItem>
            <FaCalendarAlt />
            <span>{formatDate(post.publishedAt)}</span>
          </MetaItem>
          <MetaItem>
            <FaUser />
            <span>{post.author.name}</span>
          </MetaItem>
          {variant === 'default' && (
            <MetaItem>
              <FaClock />
              <span>{post.readTime} min read</span>
            </MetaItem>
          )}
        </CardMeta>
        
        {variant === 'default' && <CardExcerpt>{post.excerpt}</CardExcerpt>}
        
        <ReadMoreLink to={`/blog/${post.slug}`}>
          Read More →
        </ReadMoreLink>
      </CardContent>
    </CardWrapper>
  );
};

// Styled Components
const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  ${({ variant }) => variant === 'compact' && `
    flex-direction: row;
    align-items: center;
  `}
`;

const CardImageWrapper = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  
  ${({ variant }) => variant === 'compact' ? `
    width: 120px;
    height: 120px;
    flex-shrink: 0;
  ` : `
    height: 220px;
  `}
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${CardImageWrapper}:hover & {
    transform: scale(1.05);
  }
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

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
  line-height: 1.4;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  ${({ variant }) => variant === 'compact' && `
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    margin-bottom: ${({ theme }) => theme.spacing[1]};
  `}
`;

const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const CardExcerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.6;
  flex: 1;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: auto;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: underline;
  }
`;

export default BlogCard;
