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

type CreateTransactionType = Omit<TransactionType, "createdAt" | "id">

type TransactionsContextProvider = {
  children: ReactNode;
}

type TransactionContextType = {
  transactions: TransactionType[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionType) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionContextType);

function TransactionsContextProvider({ children }: TransactionsContextProvider) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get<TransactionType[]>("/transactions", {
      params:{
        _sort: "createdAt",
        _order: "desc",
        q: query
      }
    });
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionType){
    const { category, description, price, type } = data;
    const response = await api.post("transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions(state => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>

  );
}

export { TransactionsContextProvider, TransactionsContext };