import { DefaultTheme } from "styled-components";

const LightMode: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "#000000",
  accentColor: "#9c88ff",
};

const DarkMode: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#4cd137",
};

export { LightMode, DarkMode };