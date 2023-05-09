import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transaction";
import { TransactionsContextProvider } from "./contexts/TransactionContenxt";

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
      <GlobalStyle />
    </ThemeProvider>	
  );
}

export { App };
