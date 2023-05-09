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
  transactions: TransactionType[]
}

const TransactionsContext = createContext({} as TransactionContextType);

function TransactionsContextProvider({children} : TransactionsContextProvider){
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function loadTransactions(){
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  },[]);
  return(
    <TransactionsContext.Provider value={{
      transactions
    }}>
      {children}
    </TransactionsContext.Provider>

  );
}

export { TransactionsContextProvider, TransactionsContext };