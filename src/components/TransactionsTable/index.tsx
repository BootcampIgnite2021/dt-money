import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import * as Styled from './styles'

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {      
      api.get('/transactions')
      .then(response => console.log(response.data))
  }, [])

  console.log('transactions', transactions);
  
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
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$ 1200,00</td>
            <td>Front end</td>
            <td>20/03/2012</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 1200,00</td>
            <td>Front end</td>
            <td>20/03/2012</td>
          </tr>
        </tbody>
      </table>
    </Styled.Container>
  )
}