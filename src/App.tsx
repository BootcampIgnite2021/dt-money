import React, { useCallback, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { ModalNewTransaction } from './components/ModalNewTransaction';
import { GlobalStyle } from './styles/global';

import { TransactionsProvider } from './hooks/transactions'

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, [])

  const handleCloseTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, [])


  return (
    <TransactionsProvider>
      <Header 
        onOpenTransactionModal={handleOpenTransactionModal}
      />
      <Dashboard />
      <ModalNewTransaction
        onCloseTransactionModal={handleCloseTransactionModal}
        isNewTransactionModalOpen={isNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
    );
}
