import { FontWeightProperty } from "csstype";

const TEXT_FACTOR = 10;

export const size: { [key: string]: number } = {
  h1: 3.5 * TEXT_FACTOR,
  h2: 3 * TEXT_FACTOR,
  h3: 2.5 * TEXT_FACTOR,
  h4: 2 * TEXT_FACTOR,
  h5: 1.5 * TEXT_FACTOR,
  h6: TEXT_FACTOR,
  small: TEXT_FACTOR / 2,
  smaller: TEXT_FACTOR / 3,
  smallest: TEXT_FACTOR / 4
};

export const weight: {
  [key: string]: FontWeightProperty;
} = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  bolder: 900
};

export const fontFamily: { [key: string]: string } = {
  primary: "Roboto",
  secondary: "Raleway",
  ternary: "Montserrat"
};
