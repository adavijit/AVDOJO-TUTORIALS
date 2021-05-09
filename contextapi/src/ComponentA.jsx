import React from "react";
import ThemeContext from "./ThemeContext";
export default function ComponentA() {
  return (
    <ThemeContext.Consumer>
      {({ theme, updateTheme }) => (
        <div className={theme}>
          <button onClick={updateTheme}>Change theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
