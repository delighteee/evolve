import { typography } from "styled-system";
import colors from "./primitiveColors";

const semanticColors = {
  // Semantic color tokens
  background: {
    default: {
      default: colors.white[1000],
      defaultHover: colors.gray[100],
      secondary: colors.gray[100],
      secondaryHover: colors.gray[200],
      tertiary: colors.gray[300],
      tertiaryHover: colors.gray[400],
    },

    neutral: {
      default: colors.slate[700],
      defaultHover: colors.slate[800],
      secondary: colors.slate[300],
      secondaryHover: colors.slate[400],
      tertiary: colors.slate[200],
      tertiaryHover: colors.slate[300],
    },

    brand: {
      default: colors.brand[800],
      defaultHover: colors.brand[900],
      secondary: colors.brand[200],
      secondaryHover: colors.brand[300],
      tertiary: colors.brand[100],
      tertiaryHover: colors.brand[200],
    },

    positive: {
      default: colors.green[500],
      defaultHover: colors.green[600],
      secondary: colors.green[200],
      secondaryHover: colors.green[300],
      tertiary: colors.green[100],
      tertiaryHover: colors.green[200],
    },

    warning: {
      default: colors.yellow[500],
      defaultHover: colors.yellow[600],
      secondary: colors.yellow[200],
      secondaryHover: colors.yellow[300],
      tertiary: colors.yellow[100],
      tertiaryHover: colors.yellow[200],
    },

    warning: {
      default: colors.red[500],
      defaultHover: colors.red[600],
      secondary: colors.red[200],
      secondaryHover: colors.red[300],
      tertiary: colors.red[100],
      tertiaryHover: colors.red[200],
    },

    disabled: {
      default: colors.brand[300],
    },

    utilities: {
      scrim: "#ffffff",
      measurement: colors.pink[200],
    },
  },

  typography: {
    default: {
      default: colors.gray[900],
      secondary: colors.gray[500],
      tertiary: colors.gray[400],
    },

    neutral: {
      default: colors.slate[900],
      secondary: colors.slate[700],
      tertiary: colors.tertiary[600],
      onNeutral: colors.slate[100],
      onNeutralSecondary: colors.slate[900],
      onNeutralTertiary: colors.slate[800],
    },

    brand: {
      default: colors.brand[800],
      secondary: colors.brand[600],
      tertiary: colors.brand[500],
      onBrand: colors.brand[100],
      onBrandSecondary: colors.brand[900],
      onBrandTertiary: colors.brand[800],
    },

    positive: {
      default: colors.green[800],
      secondary: colors.green[600],
      tertiary: colors.green[500],
      onPositive: colors.green[100],
      onPositiveSecondary: colors.green[800],
      onPositiveTertiary: colors.green[800],
    },

    warning: {
        default: colors.yellow[900],
        secondary: colors.yellow[700],
        tertiary: colors.yellow[600],
        onWarning: colors.yellow[1000],
        onWarningSecondary: colors.yellow[800],
        onWarningTertiary: colors.yellow[900],
      },
      danger: {
        default: colors.red[700],
        secondary: colors.red[600],
        tertiary: colors.red[500],
        onWarning: colors.red[100],
        onWarningSecondary: colors.red[700],
        onWarningTertiary: colors.red[700],
      },
  },

 
};



export default semanticColors;