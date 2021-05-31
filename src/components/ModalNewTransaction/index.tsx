import Modal from 'react-modal';

import CloseImg from '../../assets/close.svg';
import * as Styled from './styles';

interface ModalNewTransactionProps {
  isNewTransactionModalOpen: boolean;
  onCloseTransactionModal(): void;
}

export function ModalNewTransaction(props: ModalNewTransactionProps) {
  const { onCloseTransactionModal, isNewTransactionModalOpen } = props;

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
        <input
          type="text"
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
}
