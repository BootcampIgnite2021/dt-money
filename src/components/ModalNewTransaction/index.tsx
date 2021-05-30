import Modal from 'react-modal';

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
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}
