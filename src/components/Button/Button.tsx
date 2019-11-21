import React from "react";
import "./Button.scss";

export default (props: any) => {
  return <div className="button">{props.buttonText || "Yay, Noop!"}</div>;
};
