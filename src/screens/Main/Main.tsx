import React from "react";
import { Card, Button } from "components";
import "./Main.scss";

export default (props: any) => {
  return (
    <div className="center">
      <Card>
        <h5>
          This text will have different color, fonts, sizes at different times
        </h5>
        <Button />
      </Card>
    </div>
  );
};
