import { useState, FormEvent } from 'react';
import Modal from 'react-modal';


import { useTransactions } from '../../hooks/transactions'

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import * as Styled from './styles';

import { ModalNewTransactionProps, TransactionType } from './props'

export function ModalNewTransaction(props: ModalNewTransactionProps) {
  const { onCloseTransactionModal, isNewTransactionModalOpen } = props;
  const { addNewTransaction } = useTransactions()

  const [type, setType] = useState<TransactionType>('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      type,
      title,
      amount,
      category
    }

    await addNewTransaction(data)
    
    setTitle('')
    setCategory('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onCloseTransactionModal()
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onCloseTransactionModal}
        className="react-modal-close"  
      >
        <img src={CloseImg} alt="Icone de fechar" />
      </button>
      <Styled.Container
        onSubmit={handleCreateNewTransaction}
      >
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor (R$)"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <Styled.TransactionTypeContainer>
          <Styled.Button
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={IncomeImg} alt="Imagem de entrada" />
            <span>Entrada</span>
          </Styled.Button>

          <Styled.Button
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={OutcomeImg} alt="Imagem de saida" />
            <span>Saída</span>
          </Styled.Button>
        </Styled.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
}
