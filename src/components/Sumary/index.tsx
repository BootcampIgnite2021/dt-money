import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

import { useTransactions }  from '../../hooks/useTransactions'

import { formatPrice } from '../../utils/formatPrice'

import * as Styled from './styles'

export function Sumary() {
  const { transactions } = useTransactions()

  const sumary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Styled.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>{formatPrice(sumary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>-{formatPrice(sumary.withdraws)}</strong>
      </div>

      <div className="background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>{formatPrice(sumary.total)}</strong>
      </div>
    </Styled.Container>
  )
}