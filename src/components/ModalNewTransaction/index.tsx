import { useState } from 'react';
import Modal from 'react-modal';

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import * as Styled from './styles';

interface ModalNewTransactionProps {
  isNewTransactionModalOpen: boolean;
  onCloseTransactionModal(): void;
}

export type TransactionType = 'deposit' | 'withdraw';

export function ModalNewTransaction(props: ModalNewTransactionProps) {
  const { onCloseTransactionModal, isNewTransactionModalOpen } = props;
  const [type, setType] = useState<TransactionType>('deposit');

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
      <Styled.Container>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor (R$)"
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
        />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
}
