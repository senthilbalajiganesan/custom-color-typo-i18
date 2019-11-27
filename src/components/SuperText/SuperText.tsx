import React from "react";
import { ITextProps } from "./Type";
import { size, weight, fontFamily } from "./Constant";

export default (props: ITextProps) => {
  return (
    <div
      style={{
        fontSize: size[props.size || "h3"],
        textAlign: props.align || "center",
        fontWeight: weight[`${props.weight || "normal"}`],
        fontStyle: props.italic ? "italic" : "normal",
        fontFamily: fontFamily[`${props.fontFamily || "primary"}`],
        display: props.span ? "inline" : "block",
        marginTop: props.marginTop || 0,
        marginLeft: props.marginLeft || 0,
        marginBottom: props.marginBottom || 0,
        marginRight: props.marginRight || 0
      }}
    >
      {props.children}
    </div>
  );
};
