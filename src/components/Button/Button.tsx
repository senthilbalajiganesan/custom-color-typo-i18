import React from "react";
import "./Button.scss";
import { updateThemeForStyle } from "styles/colors/themeOptions";

export default (props: any) => {
  return (
    <div onClick={() => updateThemeForStyle("dark")} className="button">
      {props.buttonText || "Yay, Noop!"}
    </div>
  );
};
