import React from "react";
import "./Card.scss";

export default (props: any) => {
  return <div className="card">{props.children}</div>;
};
