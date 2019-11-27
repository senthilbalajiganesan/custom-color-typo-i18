import React from "react";
import { Card, Button, DropDown } from "components";
import "./Main.scss";
import { updateThemeForStyle } from "styles/colors/themeOptions";
import { useTranslation } from "react-i18next";
import SuperText from "components/SuperText/SuperText";

export default (props: any) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="center color">
      <Card>
        <span className="desc-text">
          <SuperText
            fontFamily="primary"
            span
            size="h5"
            weight="thin"
            align="end"
          >
            {t(
              "This text will have different color, fonts, sizes at different times"
            )}
          </SuperText>
          <SuperText fontFamily="ternary" size="h6" weight="bolder" italic>
            {t(
              "This text will have different color, fonts, sizes at different times"
            )}
          </SuperText>
          <SuperText fontFamily="secondary" size="h3" italic>
            {t(
              "This text will have different color, fonts, sizes at different times"
            )}
          </SuperText>
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
            { name: "Tamil", value: "tamil" },
            { name: "English (Latin)", value: "en" }
          ]}
          onChange={(event: any) => i18n.changeLanguage(event.target.value)}
        />
      </Card>
    </div>
  );
};
