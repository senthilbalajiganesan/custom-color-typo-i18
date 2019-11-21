import React from "react";
import "./Button.scss";
import { useTranslation } from "react-i18next";

export default (props: any) => {
  const { t } = useTranslation();
  return <div className="button">{props.buttonText || t("Yay, Noop!")}</div>;
};
