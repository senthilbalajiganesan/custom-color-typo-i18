import React from "react";
import { Card, Button, DropDown } from "components";
import "./Main.scss";
import { updateThemeForStyle } from "styles/colors/themeOptions";

export default (props: any) => {
  return (
    <div className="center color">
      <Card>
        <span className="desc-text">
          This text will have different color, fonts, sizes at different times
        </span>
        <Button />
      </Card>
      <br />
      <Card className="row">
        <DropDown
          list={[
            { name: "Light", value: "light" },
            { name: "Dark", value: "dark" }
          ]}
          onChange={(event: any) => updateThemeForStyle(event.target.value)}
        />
        <DropDown
          list={[
            { name: "Light", value: "light" },
            { name: "Dark", value: "dark" }
          ]}
          onChange={(event: any) => updateThemeForStyle(event.target.value)}
        />
      </Card>
    </div>
  );
};
