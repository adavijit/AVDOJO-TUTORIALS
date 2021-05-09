import ThemeContext from "./ThemeContext";
import "./App.css";
import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const App = () => {
  const [theme, changeTheme] = useState("light");

  function updateTheme() {
    if (theme === "light") changeTheme("dark");
    if (theme === "dark") changeTheme("light");
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, updateTheme }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
