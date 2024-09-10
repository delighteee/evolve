import "./App.css";
import Button from "./lib/buttonComponent";
import theme from "./recipe/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button label="Button" />
    </ThemeProvider>
  );
}

export default App;
