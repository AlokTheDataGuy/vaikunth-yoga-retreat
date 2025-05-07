import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  to,
  href,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  ...props
}) => {
  // Determine which component to render based on props
  const Component = to ? StyledLink : href ? StyledAnchor : StyledButton;

  return (
    <Component
      to={to}
      href={href}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $iconPosition={iconPosition}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <IconWrapper $iconPosition={iconPosition}>{icon}</IconWrapper>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <IconWrapper $iconPosition={iconPosition}>{icon}</IconWrapper>}
    </Component>
  );
};

// Shared styles for all button types
const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.animation.normal} ease;
  cursor: pointer;
  text-align: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Size variants */
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: ${theme.spacing[2]} ${theme.spacing[4]};
          font-size: ${theme.typography.fontSize.xs};
        `;
      case 'large':
        return css`
          padding: ${theme.spacing[4]} ${theme.spacing[8]};
          font-size: ${theme.typography.fontSize.md};
        `;
      default: // medium
        return css`
          padding: ${theme.spacing[3]} ${theme.spacing[6]};
          font-size: ${theme.typography.fontSize.sm};
        `;
    }
  }}

  /* Color variants */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.charcoal};

          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};

          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            transform: translateY(-2px);
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          padding-left: 0;
          padding-right: 0;

          &:hover {
            color: ${theme.colors.accent};
            transform: translateX(4px);
          }
        `;
      case 'accent':
        return css`
          background-color: ${theme.colors.accent};
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.colors.primary};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
      default: // primary
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.colors.accent};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
    }
  }}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
`;

const StyledAnchor = styled.a`
  ${buttonStyles}
  text-decoration: none;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: ${({ $iconPosition }) => ($iconPosition === 'right' ? '8px' : '0')};
  margin-right: ${({ $iconPosition }) => ($iconPosition === 'left' ? '8px' : '0')};
`;

export default Button;
