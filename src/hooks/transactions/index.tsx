import { FC, createContext, useContext } from 'react'

const initialValue = {}

const TransactionsContext = createContext(initialValue)

export const TransactionsProvider: FC = props => {
  const { children } = props

  return (
    <TransactionsContext.Provider value={{}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  if (!context || context === initialValue) {
    throw new Error('useTransactions must be used within a TransactionsProvider')
  }

  return context
}