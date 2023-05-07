import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

function Transactions(){
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 2.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/04/2023</td>
            </tr>
            <tr>
              <td>Pagamento de aluguel</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 1.000,00
                </PriceHighlight>
              </td>
              <td>Aluguel</td>
              <td>12/04/2023</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 30,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

export { Transactions };