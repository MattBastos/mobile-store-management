'use client';

import { useUpdateProduct } from '@/hooks';
import { InvalidUserMessage } from '@/components/InvalidUserMessage';

import * as S from './styles';

type UpdateProductFormProps = {
  productId: string;
}

export const UpdateProductForm = ({ productId }: UpdateProductFormProps) => {
  const {
    isUserValid,
    selectedProduct,
    onUpdate,
    formData,
    handleChange,
    message,
    isFormDataValid,
    cancelEdition
  } = useUpdateProduct(productId);

  return (
    <>
      <InvalidUserMessage isUserValid={isUserValid}/>

      {isUserValid && (
        <S.Container>
          <S.Title>Editando {selectedProduct.name}</S.Title>

          <form onSubmit={onUpdate}>
            <S.InputSection>
              <S.Label htmlFor="name">
                Nome
              </S.Label>

              <S.Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </S.InputSection>

            <S.InputSection>
              <S.Label htmlFor="brand">
                Marca
              </S.Label>

              <S.Input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </S.InputSection>

            <S.InputSection>
              <S.Label htmlFor="model">
                Modelo
              </S.Label>

              <S.Input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
              />
            </S.InputSection>

            <S.InputSection>
              <S.Label htmlFor="price">
                Preço
              </S.Label>

              <S.Input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </S.InputSection>

            <S.InputSection>
              <S.Label htmlFor="color">
                Cor
              </S.Label>

              <S.Input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </S.InputSection>

            {message && <S.Message>{message}</S.Message>}

            <S.ButtonSection>
              <S.ConfirmButton
                type="submit"
                title="Confirmar edição"
                aria-label="Confirmar edição"
                disabled={!isFormDataValid()}
                className={!isFormDataValid() ? 'bg-opacity-50' : 'hover:bg-green-600'}
              >
                Confirmar
              </S.ConfirmButton>

              <S.CancelButton
                type="button"
                title="Cancelar edição"
                aria-label="Cancelar edição"
                onClick={cancelEdition}
              >
                Cancelar
              </S.CancelButton>
            </S.ButtonSection>
          </form>
        </S.Container>
      )}
    </>
  )
};
