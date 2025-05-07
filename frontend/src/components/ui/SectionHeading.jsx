import React from 'react';
import styled, { css } from 'styled-components';

const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  size = 'medium',
  withDivider = true,
  color = 'default',
  className,
  ...props
}) => {
  return (
    <HeadingWrapper $align={align} className={className} {...props}>
      {subtitle && <Subtitle $size={size} $color={color}>{subtitle}</Subtitle>}
      <Title $size={size} $color={color}>{title}</Title>
      {withDivider && <Divider $align={align} />}
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.div`
  text-align: ${({ $align }) => $align};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ $color, theme }) => {
    switch ($color) {
      case 'light':
        return theme.colors.white;
      case 'primary':
        return theme.colors.primary;
      case 'accent':
        return theme.colors.accent;
      default:
        return theme.colors.charcoal;
    }
  }};

  /* Size variants */
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: ${theme.typography.fontSize['2xl']};

          @media (max-width: ${theme.breakpoints.md}) {
            font-size: ${theme.typography.fontSize.xl};
          }
        `;
      case 'large':
        return css`
          font-size: ${theme.typography.fontSize['5xl']};

          @media (max-width: ${theme.breakpoints.md}) {
            font-size: ${theme.typography.fontSize['3xl']};
          }
        `;
      default: // medium
        return css`
          font-size: ${theme.typography.fontSize['4xl']};

          @media (max-width: ${theme.breakpoints.md}) {
            font-size: ${theme.typography.fontSize['2xl']};
          }
        `;
    }
  }}
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  color: ${({ $color, theme }) => {
    switch ($color) {
      case 'light':
        return theme.colors.white;
      case 'primary':
        return theme.colors.primary;
      default:
        return theme.colors.accent;
    }
  }};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  /* Size variants */
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: ${theme.typography.fontSize.md};
        `;
      case 'large':
        return css`
          font-size: ${theme.typography.fontSize.xl};
        `;
      default: // medium
        return css`
          font-size: ${theme.typography.fontSize.lg};
        `;
    }
  }}
`;

const Divider = styled.div`
  height: 2px;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.accent};
  margin: ${({ $align }) => {
    switch ($align) {
      case 'left':
        return '0 auto 0 0';
      case 'right':
        return '0 0 0 auto';
      default: // center
        return '0 auto';
    }
  }};
`;

export default SectionHeading;
