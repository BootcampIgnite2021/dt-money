export interface ModalNewTransactionProps {
  isNewTransactionModalOpen: boolean;
  onCloseTransactionModal(): void;
}

export type TransactionType = "deposit" | "withdraw";
