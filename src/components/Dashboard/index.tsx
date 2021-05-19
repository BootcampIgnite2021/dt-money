import { Sumary } from '../Sumary';
import { TransactionsTable } from '../TransactionsTable';
import * as Styled from './styles';

export function Dashboard(){
  return (
    <Styled.Container>
      <Sumary />
      <TransactionsTable />
    </Styled.Container>
  )
}