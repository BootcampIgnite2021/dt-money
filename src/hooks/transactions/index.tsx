import {
  createContext,
  useContext,
  useCallback,
  useState,
} from 'react'

import {
  TransactionsContextData,
  Trasanction,
  TransactionsProviderProps,
} from './props'

import { api } from '../../services/api'

const initialValue = {} as TransactionsContextData

const TransactionsContext = createContext(initialValue)

export const TransactionsProvider = (props: TransactionsProviderProps) => {
  const { children } = props

  const [transactions, setTransactions] = useState<Trasanction[]>([])

  const getTransactions = useCallback(async () => {
    try {
      const response = await api.get('/transactions')

      setTransactions(response.data.transactions)

    } catch (error) {
      throw new Error(error)
    }
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, getTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext)

  if (!context || context === initialValue) {
    throw new Error('useTransactions must be used within a TransactionsProvider')
  }

  return context
}