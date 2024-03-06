import { SimpleProduct } from '@/types';
import * as S from '../styles';

type SimpleProductFormProps = {
  formMessage: string;
  isFormOpen: boolean;
  isFormDataValid: boolean;
  closeForm: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: (e: React.FormEvent) => void;
  simpleProducts: SimpleProduct[];
}

export const BulkProductForm = ({
  formMessage,
  isFormOpen,
  isFormDataValid,
  closeForm,
  onChange,
  onConfirm,
  simpleProducts
}: SimpleProductFormProps) => {
  return (
    isFormOpen && (
      <>
        <S.OverlayBackdrop onClick={closeForm}/>

        <S.ProductManagementContainer>
          <S.BulkFormContainer>
            <S.Title>Insira as informações do produto</S.Title>

            <form onSubmit={onConfirm}>
              <S.InputSection>
                <S.Label htmlFor="name">
                  Nome
                </S.Label>
                <S.Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </S.InputSection>

              {formMessage && <S.Message>{formMessage}</S.Message>}

              <S.ButtonSection>
                <S.ConfirmButton
                  type="submit"
                  title="Confirmar edição"
                  aria-label="Confirmar edição"
                  disabled={isFormDataValid}
                  className={isFormDataValid ? 'bg-opacity-50' : 'hover:bg-green-600'}
                >
                  Confirmar
                </S.ConfirmButton>

                <S.CancelButton
                  type="button"
                  title="Cancelar edição"
                  aria-label="Cancelar edição"
                  disabled={false}
                  onClick={closeForm}
                >
                  Cancelar
                </S.CancelButton>
              </S.ButtonSection>
            </form>
          </S.BulkFormContainer>

          <S.ProductsContainer>
            <S.Title>Lista de Produtos</S.Title>

            <section className='grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
              {simpleProducts.length > 0 && (
                simpleProducts.map((product, key) => (
                  <section key={key} className='bg-gray-200 rounded flex flex-col p-3 justify-center items-center'>
                    <span className='text-gray-600'>Nome: {product.name}</span>
                    <span className='text-gray-600'>Marca: {product.brand}</span>
                    <span className='text-gray-600'>Modelo: {product.model}</span>
                    <span className='text-gray-600'>Perço: {product.price}</span>
                    <span className='text-gray-600'>Cor: {product.color}</span>
                  </section>
                ))
              )}
            </section>
          </S.ProductsContainer>
        </S.ProductManagementContainer>
      </>
    )
  );
};

