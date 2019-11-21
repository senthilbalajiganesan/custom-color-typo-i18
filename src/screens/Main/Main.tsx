import React from "react";
import { Card, Button } from "components";
import "./Main.scss";

export default (props: any) => {
  return (
    <div className="center color">
      <Card>
        <span className="desc-text">
          This text will have different color, fonts, sizes at different times
        </span>
        <Button />
      </Card>
    </div>
  );
};
