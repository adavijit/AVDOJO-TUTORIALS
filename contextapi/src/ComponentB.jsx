import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ComponentB() {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <p>Component B</p>
    </div>
  );
}
