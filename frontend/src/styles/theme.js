const theme = {
  colors: {
    // Primary colors
    primary: '#2A5D45', // Deep forest green
    primaryDark: '#1E4230', // Darker forest green
    secondary: '#A4C5D6', // Soft sky blue
    accent: '#E8985E', // Warm sunrise orange
    accentDark: '#D07A4E', // Darker sunrise orange

    // Neutrals
    white: '#FFFFFF',
    offWhite: '#F8F7F4',
    lightGray: '#E5E5E3',
    mediumGray: '#B0B0B0',
    darkGray: '#4A4A4A',
    charcoal: '#2D2D2D',
    black: '#1A1A1A',

    // Gray scale
    gray: {
      100: '#F7F7F7',
      200: '#E5E5E3',
      300: '#D1D1D1',
      400: '#B0B0B0',
      500: '#8E8E8E',
      600: '#6B6B6B',
      700: '#4A4A4A',
      800: '#2D2D2D',
      900: '#1A1A1A'
    },

    // Red scale
    red: {
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D'
    },

    // Green scale
    green: {
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D'
    },

    // Blue scale
    blue: {
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A'
    },

    // Yellow scale
    yellow: {
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F'
    },

    // Orange scale
    orange: {
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FB923C',
      500: '#F97316',
      600: '#EA580C',
      700: '#C2410C',
      800: '#9A3412',
      900: '#7C2D12'
    },

    // Additional colors
    earthBrown: '#8B6C5C',
    stoneTaupe: '#C2B8A3',
    leafGreen: '#6B9080',
    mountainPurple: '#9D8FB3',
    sunsetPink: '#E8A798',

    // Semantic colors
    error: '#DC2626',
    success: '#16A34A',
    warning: '#D97706',
    info: '#2563EB',

    // Gradients (to be used with CSS)
    gradients: {
      sunrise: 'linear-gradient(135deg, #F9D976 0%, #E8985E 100%)',
      sunset: 'linear-gradient(135deg, #E8985E 0%, #9D8FB3 100%)',
      mountain: 'linear-gradient(180deg, #A4C5D6 0%, #2A5D45 100%)',
      forest: 'linear-gradient(135deg, #2A5D45 0%, #6B9080 100%)',
    }
  },

  typography: {
    // Font families
    fontFamily: {
      heading: "'Playfair Display', serif",
      body: "'Poppins', sans-serif",
      accent: "'Cormorant Garamond', serif"
    },

    // Font sizes (using rem for accessibility)
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      md: '1.125rem',   // 18px
      lg: '1.25rem',    // 20px
      xl: '1.5rem',     // 24px
      '2xl': '1.875rem', // 30px
      '3xl': '2.25rem',  // 36px
      '4xl': '3rem',     // 48px
      '5xl': '3.75rem',  // 60px
      '6xl': '4.5rem',   // 72px
    },

    // Font weights
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // Line heights
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  spacing: {
    // Spacing scale (in rem)
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Animation durations
  animation: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    verySlow: '0.8s',
    breathing: '4s',
  },

  // Z-index scale
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
  },
};

export default theme;
