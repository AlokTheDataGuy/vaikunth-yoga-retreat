import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({
  children,
  variant = 'default',
  to,
  href,
  onClick,
  image,
  title,
  subtitle,
  content,
  footer,
  elevation = 'medium',
  hoverEffect = true,
  aspectRatio,
  className,
  ...props
}) => {
  // Determine which component to render based on props
  const Component = to ? StyledLink : href ? StyledAnchor : StyledDiv;

  // If image, title, subtitle, content, or footer are provided, use the structured card
  const isStructured = image || title || subtitle || content || footer;

  return (
    <Component
      as={motion.div}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      variant={variant}
      elevation={elevation}
      className={className}
      to={to}
      href={href}
      onClick={onClick}
      {...props}
    >
      {isStructured ? (
        <>
          {image && (
            <CardImageWrapper aspectRatio={aspectRatio}>
              <CardImage src={image} alt={title || 'Card image'} />
            </CardImageWrapper>
          )}
          <CardBody>
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
            {title && <CardTitle>{title}</CardTitle>}
            {content && <CardContent>{content}</CardContent>}
          </CardBody>
          {footer && <CardFooter>{footer}</CardFooter>}
        </>
      ) : (
        children
      )}
    </Component>
  );
};

// Base card styles
const cardStyles = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.animation.normal} ease;
  height: 100%;

  /* Elevation variants */
  ${({ elevation, theme }) => {
    switch (elevation) {
      case 'none':
        return css`
          box-shadow: none;
        `;
      case 'low':
        return css`
          box-shadow: ${theme.shadows.sm};
        `;
      case 'high':
        return css`
          box-shadow: ${theme.shadows.lg};
        `;
      default: // medium
        return css`
          box-shadow: ${theme.shadows.md};
        `;
    }
  }}

  /* Variant styles */
  ${({ variant, theme }) => {
    switch (variant) {
      case 'glass':
        return css`
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        `;
      case 'outlined':
        return css`
          background-color: transparent;
          border: 1px solid ${theme.colors.lightGray};
          box-shadow: none;
        `;
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
      case 'accent':
        return css`
          background-color: ${theme.colors.accent};
          color: ${theme.colors.white};
        `;
      default: // default
        return css`
          background-color: ${theme.colors.white};
        `;
    }
  }}

  &:hover {
    ${({ elevation, theme, hoverEffect }) =>
      hoverEffect &&
      elevation !== 'none' &&
      css`
        box-shadow: ${theme.shadows.xl};
      `
    }
  }
`;

const StyledDiv = styled.div`
  ${cardStyles}
`;

const StyledLink = styled(Link)`
  ${cardStyles}
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const StyledAnchor = styled.a`
  ${cardStyles}
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  ${({ aspectRatio }) => {
    if (aspectRatio) {
      return css`
        aspect-ratio: ${aspectRatio};
      `;
    } else {
      return css`
        aspect-ratio: 4/3; /* Slightly taller aspect ratio */
      `;
    }
  }}
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${StyledDiv}:hover &,
  ${StyledLink}:hover &,
  ${StyledAnchor}:hover & {
    transform: scale(1.05);
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`;

const CardSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const CardContent = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const CardFooter = styled.div`
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export default Card;
