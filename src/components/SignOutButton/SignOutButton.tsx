'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { SignOut } from "@/components/Icons";

import * as S from './styles';

export const SignOutButton = () => {
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

  return (
    <>
      <S.SignOutButton
        type="button"
        title="Sair"
        aria-label="Sair"
        onClick={openModal}
      >
        <SignOut size={20} />

        <S.SignOutTextButton>Sair</S.SignOutTextButton>
      </S.SignOutButton>

      {isModalOpen && (<S.OverlayBackdrop onClick={closeModal} />)}

      <S.ModalContainer className={isModalOpen ? '' : 'hidden'}>
        <S.ModalTitle>
          Tem certeza que deseja sair?
        </S.ModalTitle>

        <S.ModalButtonsContainer>
          <S.ConfirmButton
            type="button"
            title="Confirmar"
            aria-label="Confirmar"
            onClick={handleConfirm}
          >
            Confirmar
          </S.ConfirmButton>

          <S.CancelButton
            type="button"
            title="Cancelar"
            aria-label="Cancelar"
            onClick={closeModal}
          >
            Cancelar
          </S.CancelButton>
        </S.ModalButtonsContainer>
      </S.ModalContainer>
    </>
  );
};
