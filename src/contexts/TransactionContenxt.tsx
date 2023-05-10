import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

type TransactionType = {
  id: number;
  description: string;
  category: string;
  price: number;
  type: "income" | "outcome";
  createdAt: string;
}

type TransactionsContextProvider = {
  children: ReactNode;
}

type TransactionContextType = {
  transactions: TransactionType[];
  fetchTransactions: (query?: string) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionContextType);

function TransactionsContextProvider({ children }: TransactionsContextProvider) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get<TransactionType[]>("/transactions", {
      params:{
        q: query
      }
    });
    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions
    }}>
      {children}
    </TransactionsContext.Provider>

  );
}

export { TransactionsContextProvider, TransactionsContext };