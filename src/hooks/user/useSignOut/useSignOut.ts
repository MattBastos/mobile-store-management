import { useState } from 'react';
import { useRouter } from "next/navigation";

export const useSignOut = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleConfirm = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    closeModal();
    router.push('/login');
  };

  return {
    openModal,
    isModalOpen,
    closeModal,
    handleConfirm
  };
};