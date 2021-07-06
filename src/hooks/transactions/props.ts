import { ReactNode } from "react";

export interface Trasanction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export interface TransactionsProviderProps {
  children: ReactNode;
}

export interface TransactionsContextData {
  getTransactions(): Promise<void>;

  transactions: Trasanction[];
}
