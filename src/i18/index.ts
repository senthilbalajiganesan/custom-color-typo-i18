import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const initializeI18 = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: {
            "This text will have different color, fonts, sizes at different times":
              "This text will have different color, fonts, sizes at different times",
            "Yay, Noop!": "Yay, Noop!"
          }
        },
        tamil: {
          translation: {
            "This text will have different color, fonts, sizes at different times":
              "இந்த உரையில் வெவ்வேறு வண்ணங்கள், எழுத்துருக்கள், அளவுகள் வெவ்வேறு நேரங்களில் இருக்கும்",
            "Yay, Noop!": "ஆம், இல்லை!"
          }
        }
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    });
};
