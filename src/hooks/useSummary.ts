import { TransactionsContext } from "../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";
import { useMemo } from "react";

function useSummary() {
  // const { transactions } = useTransaction();
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const summary = useMemo(() => {
    return transactions.reduce((accumulator, { type, price }) => {
      if (type === "income") {
        accumulator["income"] += price;
        accumulator["total"] += price;
      }
      if (type === "outcome") {
        accumulator["outcome"] += price;
        accumulator["total"] -= price;
      }
      return accumulator;
    }, { income: 0, outcome: 0, total: 0 });
  }, []);

  
  return { summary };
}

export { useSummary };