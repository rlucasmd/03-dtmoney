import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>App</h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>	
  );
}

export { App };
