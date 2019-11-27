import React, { useState, useEffect } from "react";
export const themeOptions = [
  {
    "--primary": "#ffffff",
    "--text-color": "#000000",
    "--button-color": "#4ECDC4",
    "--secondary": "#eeeeee",
    name: "light"
  },
  {
    "--primary": "#2F2F2F",
    "--text-color": "#FFFFFF",
    "--button-color": "#AABD8C",
    "--secondary": "#656065",
    name: "dark"
  }
];

export const updateThemeForStyle = (themeName: string) => {
  const selectedTheme: any =
    themeOptions.find(t => t.name.toLowerCase() === themeName.toLowerCase()) ||
    {};
  const html = document.getElementsByTagName("html")[0];
  Object.keys(selectedTheme).forEach((property, i) => {
    if (property === "name") {
      return;
    }
    html.style.setProperty(property, selectedTheme[`${property}`]);
  });
};
