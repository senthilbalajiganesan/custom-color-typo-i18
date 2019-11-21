import React from "react";
import { Card, Button, DropDown } from "components";
import "./Main.scss";
import { updateThemeForStyle } from "styles/colors/themeOptions";
import { useTranslation } from "react-i18next";

export default (props: any) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="center color">
      <Card>
        <span className="desc-text">
          {t(
            "This text will have different color, fonts, sizes at different times"
          )}
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
            { name: "English", value: "en" },
            { name: "Tamil", value: "tamil" }
          ]}
          onChange={(event: any) => i18n.changeLanguage(event.target.value)}
        />
      </Card>
    </div>
  );
};
