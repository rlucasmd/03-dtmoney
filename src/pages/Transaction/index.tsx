import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { formatDate, formatMoney } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { 
  PriceHighlight, 
  TransactionsContainer, 
  TransactionsTable 
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";

function Transactions(){

  // const { transactions } = useTransaction();
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  console.log(transactions);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {
              transactions.map(
                transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === "outcome" && "- "}
                        {formatMoney.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{formatDate.format(new Date(transaction.createdAt))}</td>
                  </tr>
                )
              )
            }
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

export { Transactions };