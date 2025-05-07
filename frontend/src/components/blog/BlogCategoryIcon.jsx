import React from 'react';
import styled from 'styled-components';
import { 
  FaYinYang, 
  FaBrain, 
  FaLeaf, 
  FaHeartbeat, 
  FaPrayingHands, 
  FaMountain, 
  FaBookOpen 
} from 'react-icons/fa';

const BlogCategoryIcon = ({ category, size = 'medium' }) => {
  // Map categories to icons
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'yoga':
        return <FaYinYang />;
      case 'meditation':
        return <FaBrain />;
      case 'ayurveda':
        return <FaLeaf />;
      case 'wellness':
        return <FaHeartbeat />;
      case 'spirituality':
        return <FaPrayingHands />;
      case 'travel':
        return <FaMountain />;
      default:
        return <FaBookOpen />;
    }
  };
  
  // Map categories to colors
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'yoga':
        return '#4CAF50'; // Green
      case 'meditation':
        return '#2196F3'; // Blue
      case 'ayurveda':
        return '#FF9800'; // Orange
      case 'wellness':
        return '#E91E63'; // Pink
      case 'spirituality':
        return '#9C27B0'; // Purple
      case 'travel':
        return '#795548'; // Brown
      default:
        return '#607D8B'; // Blue Grey
    }
  };
  
  return (
    <IconWrapper 
      color={getCategoryColor(category)}
      size={size}
    >
      {getCategoryIcon(category)}
    </IconWrapper>
  );
};

// Styled Components
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 50%;
  
  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `
          width: 30px;
          height: 30px;
          font-size: ${theme.typography.fontSize.sm};
        `;
      case 'large':
        return `
          width: 60px;
          height: 60px;
          font-size: ${theme.typography.fontSize['2xl']};
        `;
      default: // medium
        return `
          width: 45px;
          height: 45px;
          font-size: ${theme.typography.fontSize.lg};
        `;
    }
  }}
`;

export default BlogCategoryIcon;
