export interface ITextProps extends TextMarginProps {
  children: string;
  align?: "center" | "start" | "end";
  weight?: "thin" | "light" | "regular" | "medium" | "bold" | "bolder";
  italic?: boolean;
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "small"
    | "smaller"
    | "smallest";
  span?: boolean;
  fontFamily?: string;
}

export interface TextMarginProps {
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
}
