import * as Styled from './styles'

import {formatPrice} from '../../utils/formatPrice';
import { formatDate } from '../../utils/formatDate';

import { useTransactions } from '../../hooks/useTransactions'
import { useEffect } from 'react';

export function TransactionsTable() {
  const { getTransactions, transactions } = useTransactions()

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return (
    <Styled.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' && '-'}{' '}
                {formatPrice(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Styled.Container>
  )
}