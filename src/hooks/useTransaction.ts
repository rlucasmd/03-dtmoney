import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContenxt";

function useTransaction(){
  const context = useContext(TransactionsContext);
  return context;
}

export { useTransaction };