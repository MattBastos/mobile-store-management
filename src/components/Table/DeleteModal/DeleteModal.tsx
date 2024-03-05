import { X } from '@/components/Icons';
import { ReactNode } from 'react';

import * as S from './styles';

type ModalProps = {
  isModalOpen: boolean;
  productName: string;
  productModel: string;
  closeModal: () => void;
  handleConfirm: () => void;
};

export const DeleteModal = ({
  isModalOpen,
  productName,
  productModel,
  closeModal,
  handleConfirm
}: ModalProps) => {
  return (
    <>
      {isModalOpen && <S.OverlayBackdrop onClick={closeModal}/>}

      <S.Container className={isModalOpen ? '' : 'hidden'}>
        <S.TitleContainer>
          <S.Title>Confirme sua ação</S.Title>

          <S.CloseModalButton
            type="button"
            title="Fechar"
            aria-label="Fechar"
            onClick={closeModal}
          >
            <X size={20} color="gray" weight="bold" />
          </S.CloseModalButton>
        </S.TitleContainer>

        <S.SeparatorLine />

        <S.Text>{`Deseja deletar o produto ${productName} modelo ${productModel}?`}</S.Text>

        <S.ModalButtonsContainer>
          <S.ConfirmButton
            type="button"
            title="Deletar"
            aria-label="Deletar"
            onClick={handleConfirm}
          >
            Deletar
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
      </S.Container>
    </>
  );
};