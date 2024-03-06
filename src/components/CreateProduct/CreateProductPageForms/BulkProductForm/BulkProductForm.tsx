import { SimpleProduct } from '@/types';
import * as S from '../styles';
import { ArrowFatLinesRight } from '@/components/Icons';

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
                  Adicionar
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

          <section className='md:flex hidden'>
            <ArrowFatLinesRight size={50} color='#22c55e' weight='fill'/>
          </section>

          <S.ProductsContainer className='lg:w-[600px] md:w-[500px] w-[250px]'>
            <S.Title>Lista de Produtos</S.Title>

            <section className='grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
              {simpleProducts.length > 0 && (
                simpleProducts.map((product, key) => (
                  <section key={key} className='bg-gray-200 rounded flex flex-col p-3 justify-center items-center gap-1'>
                    <span className='text-gray-600 bg-gray-300 p-1 rounded w-full text-start'>Nome: {product.name}</span>
                    <span className='text-gray-600 bg-gray-300 p-1 rounded w-full text-start'>Marca: {product.brand}</span>
                    <span className='text-gray-600 bg-gray-300 p-1 rounded w-full text-start'>Modelo: {product.model}</span>
                    <span className='text-gray-600 bg-gray-300 p-1 rounded w-full text-start'>Perço: {product.price}</span>
                    <span className='text-gray-600 bg-gray-300 p-1 rounded w-full text-start'>Cor: {product.color}</span>
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

