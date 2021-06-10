import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#D94E41",
  primaryBright: "#D94E41",
  primaryDark: "#1d3557",
  secondary: "#8C342B",
  success: "#9B9694",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F2DA91",
  backgroundDisabled: "#dde6da",
  contrast: "#f7e9dc",
  invertedContrast: "#f1faee",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#221922",
  textDisabled: "#a4a9ab",
  textSubtle: "#221922",
  borderColor: "#8C342B",
  card: "#f7e9dc",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#221922",
  background: "#8C342B",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#eeeaf4",
  primaryDark: "#F2DA91",
  tertiary: "#f7e9dc",
  text: "#221922",
  textDisabled: "#BDC2C4",
  textSubtle: "#221922",
  borderColor: "#524B63",
  card: "#F2DA91",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
