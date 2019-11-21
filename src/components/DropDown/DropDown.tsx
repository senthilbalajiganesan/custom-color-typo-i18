import React from "react";
import "./DropDown.scss";

export default (props: any) => {
  return (
    <select onChange={(event: any) => props.onChange(event)}>
      {props.list.map((item: any, index: number) => (
        <option value={item.value}>{item.name}</option>
      ))}
    </select>
  );
};
