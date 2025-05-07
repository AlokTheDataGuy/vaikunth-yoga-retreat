import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Fonts are imported in index.html */

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set core body defaults */
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    background-color: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.charcoal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.animation.normal} ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  /* Lists */
  ul, ol {
    padding-left: ${({ theme }) => theme.spacing[6]};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  /* Images */
  img {
    max-width: 100%;
    display: block;
  }

  /* Buttons */
  button {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Form elements */
  input, textarea, select {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  /* Utility classes */
  .container {
    width: 100vw;
    max-width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .text-center {
    text-align: center;
  }

  .accent-text {
    font-family: ${({ theme }) => theme.typography.fontFamily.accent};
  }

  /* Scroll handling */
  .scrollable {
    overflow: auto;
    width: 100vw;
    max-width: 100%;
  }
  
  #root {
    width: 100vw;
    overflow-x: hidden;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Animations */
  @keyframes breathing {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Custom cursor */
  body {
    cursor: url('/cursor.svg'), auto;
  }
`;

export default GlobalStyles;