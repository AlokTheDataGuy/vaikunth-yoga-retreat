import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogPreview = ({ post, formatDate }) => {
  return (
    <PreviewCard
      as={motion.div}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <PreviewImageWrapper to={`/blog/${post.slug}`}>
        <PreviewImage src={post.featuredImage} alt={post.title} />
        <CategoryBadge>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</CategoryBadge>
      </PreviewImageWrapper>
      
      <PreviewContent>
        <PreviewMeta>
          <MetaItem>
            <FaCalendarAlt />
            <span>{formatDate(post.publishedAt)}</span>
          </MetaItem>
          <MetaItem>
            <FaUser />
            <span>{post.author.name}</span>
          </MetaItem>
        </PreviewMeta>
        
        <PreviewTitle to={`/blog/${post.slug}`}>{post.title}</PreviewTitle>
        <PreviewExcerpt>{post.excerpt}</PreviewExcerpt>
        
        <ReadMoreLink to={`/blog/${post.slug}`}>
          Read More <FaArrowRight />
        </ReadMoreLink>
      </PreviewContent>
    </PreviewCard>
  );
};

// Styled Components
const PreviewCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PreviewImageWrapper = styled(Link)`
  position: relative;
  display: block;
  height: 220px;
  overflow: hidden;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${PreviewImageWrapper}:hover & {
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

const PreviewContent = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PreviewMeta = styled.div`
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

const PreviewTitle = styled(Link)`
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
`;

const PreviewExcerpt = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.6;
  flex: 1;
`;

const ReadMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
  
  svg {
    font-size: 0.8em;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    
    svg {
      transform: translateX(4px);
    }
  }
`;

export default BlogPreview;
