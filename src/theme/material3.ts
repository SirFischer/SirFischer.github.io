/*
 * Material Design 3 Design System
 * File Created: Friday, 25th July 2025
 * Author: Marek Fischer
 * -----
 * Copyright - 2025 Deep Vertic
 */

// Material Design 3 Color Tokens - Updated with subtle red accents
export const colors = {
  // Primary color palette - Blue with subtle warmth
  primary: '#1565C0',
  onPrimary: '#FFFFFF',
  primaryContainer: '#E1F5FE',
  onPrimaryContainer: '#0D47A1',

  // Secondary color palette - Neutral with warm undertones
  secondary: '#5D4037',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#EFEBE9',
  onSecondaryContainer: '#3E2723',

  // Tertiary color palette - Subtle red accent
  tertiary: '#C62828',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFEBEE',
  onTertiaryContainer: '#B71C1C',

  // Error color palette
  error: '#D32F2F',
  onError: '#FFFFFF',
  errorContainer: '#FFEBEE',
  onErrorContainer: '#B71C1C',

  // Surface color palette with warm undertones
  background: '#FAFAFA',
  onBackground: '#212121',
  surface: '#FFFFFF',
  onSurface: '#212121',
  surfaceVariant: '#F5F5F5',
  onSurfaceVariant: '#616161',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#FFF8F6',
  surfaceContainer: '#F3F1F0',
  surfaceContainerHigh: '#EDE7E5',
  surfaceContainerHighest: '#E4DDD9',

  // Outline
  outline: '#9E9E9E',
  outlineVariant: '#E0E0E0',

  // Other
  shadow: '#000000',
  scrim: '#000000',
  inverseSurface: '#424242',
  inverseOnSurface: '#FAFAFA',
  inversePrimary: '#90CAF9',
}

// Material Design 3 Typography Scale
export const typography = {
  displayLarge: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '57px',
    lineHeight: '64px',
    fontWeight: 400,
    letterSpacing: '-0.25px',
  },
  displayMedium: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '45px',
    lineHeight: '52px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  displaySmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  headlineLarge: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  headlineMedium: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  headlineSmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  titleLarge: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '22px',
    lineHeight: '28px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  titleMedium: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: '0.15px',
  },
  titleSmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    letterSpacing: '0.1px',
  },
  bodyLarge: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    letterSpacing: '0.15px',
  },
  bodyMedium: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '0.25px',
  },
  bodySmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    letterSpacing: '0.4px',
  },
  labelLarge: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    letterSpacing: '0.1px',
  },
  labelMedium: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
  labelSmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
}

// Material Design 3 Elevation
export const elevation = {
  level0: 'none',
  level1: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  level2: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  level3: '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
  level4: '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
  level5: '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
}

// Material Design 3 Shape
export const shape = {
  corner: {
    none: '0px',
    extraSmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    extraLarge: '28px',
    full: '50%',
  }
}

// Material Design 3 Motion
export const motion = {
  easing: {
    emphasized: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
    emphasizedAccelerate: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
    standard: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
    standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
  },
  duration: {
    short1: '50ms',
    short2: '100ms',
    short3: '150ms',
    short4: '200ms',
    medium1: '250ms',
    medium2: '300ms',
    medium3: '350ms',
    medium4: '400ms',
    long1: '450ms',
    long2: '500ms',
    long3: '550ms',
    long4: '600ms',
  }
}

export const materialTheme = {
  colors,
  typography,
  elevation,
  shape,
  motion,
}
