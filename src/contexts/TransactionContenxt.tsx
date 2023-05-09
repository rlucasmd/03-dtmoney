import { ReactNode, createContext, useEffect, useState } from "react";

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
  fetchTransactions: () => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionContextType);

function TransactionsContextProvider({ children }: TransactionsContextProvider) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    setTransactions(data);
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