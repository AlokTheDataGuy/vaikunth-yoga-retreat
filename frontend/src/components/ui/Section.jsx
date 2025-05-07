import React from 'react';
import styled, { css } from 'styled-components';

const Section = ({
  children,
  variant = 'default',
  background,
  backgroundImage,
  fullWidth = false,
  spacing = 'medium',
  overlay = false,
  id,
  className,
  ...props
}) => {
  return (
    <SectionWrapper
      $variant={variant}
      $background={background}
      $backgroundImage={backgroundImage}
      $spacing={spacing}
      $overlay={overlay}
      id={id}
      className={className}
      {...props}
    >
      <SectionContainer $fullWidth={fullWidth}>
        {children}
      </SectionContainer>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  position: relative;
  width: 100%;

  /* Background options */
  background-color: ${({ $background, theme, $variant }) => {
    if ($background) return $background;

    switch ($variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'accent':
        return theme.colors.accent;
      case 'light':
        return theme.colors.offWhite;
      case 'dark':
        return theme.colors.charcoal;
      default:
        return 'transparent';
    }
  }};

  /* Text color based on variant */
  color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
      case 'accent':
      case 'dark':
        return theme.colors.white;
      default:
        return theme.colors.charcoal;
    }
  }};

  /* Background image if provided */
  ${({ $backgroundImage, $overlay }) => $backgroundImage && css`
    background-image: url(${$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    ${$overlay && css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
    `}
  `}

  /* Spacing variants */
  ${({ $spacing, theme }) => {
    switch ($spacing) {
      case 'small':
        return css`
          padding: ${theme.spacing[8]} 0;
        `;
      case 'large':
        return css`
          padding: ${theme.spacing[20]} 0;
        `;
      case 'none':
        return css`
          padding: 0;
        `;
      default: // medium
        return css`
          padding: ${theme.spacing[16]} 0;
        `;
    }
  }}
`;

const SectionContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '1400px')};
  margin: 0 auto;
  padding: ${({ $fullWidth, theme }) => ($fullWidth ? '0' : `0 ${theme.spacing[6]}`)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Section;
