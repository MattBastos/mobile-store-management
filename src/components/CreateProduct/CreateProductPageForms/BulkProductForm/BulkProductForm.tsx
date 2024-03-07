import { SimpleProduct } from '@/types';
import * as S from '../styles';
import { ArrowFatLinesRight } from '@/components/Icons';

type SimpleProductFormProps = {
  formMessage: string;
  productsContainerMessage: string;
  isFormOpen: boolean;
  isFormDataValid: boolean;
  isCreationButtonAbled: boolean;
  closeForm: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: (e: React.FormEvent) => void;
  simpleProducts: SimpleProduct[];
  onCreate: () => void;
}

export const BulkProductForm = ({
  formMessage,
  productsContainerMessage,
  isFormOpen,
  isFormDataValid,
  isCreationButtonAbled,
  closeForm,
  onChange,
  onConfirm,
  simpleProducts,
  onCreate
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
                  onClick={closeForm}
                >
                  Cancelar
                </S.CancelButton>
              </S.ButtonSection>
            </form>
          </S.BulkFormContainer>

          <S.ArrowIconContainer>
            <ArrowFatLinesRight size={50} color='#22c55e' weight='fill'/>
          </S.ArrowIconContainer>

          <S.ProductsContainer>
            <S.Title>Lista de Produtos</S.Title>

            {simpleProducts.length === 0 && (
              <S.Message>A lista de produtos está vazia.</S.Message>
            )}

            <S.Grid>
              {simpleProducts.length > 0 && (
                simpleProducts.map((product, key) => (
                  <S.ProductCard key={key}>
                    <S.TextDetails>Nome: {product.name}</S.TextDetails>
                    <S.TextDetails>Marca: {product.brand}</S.TextDetails>
                    <S.TextDetails>Modelo: {product.model}</S.TextDetails>
                    <S.TextDetails>Perço: {product.price}</S.TextDetails>
                    <S.TextDetails>Cor: {product.color}</S.TextDetails>
                  </S.ProductCard>
                ))
              )}
            </S.Grid>

            {productsContainerMessage && <S.Message>{productsContainerMessage}</S.Message>}

            <S.CreationButton
              type="button"
              title="Criar Produtos"
              aria-label="Criar Produtos"
              disabled={isCreationButtonAbled}
              className={isCreationButtonAbled ? 'bg-opacity-50' : 'hover:bg-blue-600'}
              onClick={onCreate}
            >
              Criar Produtos
            </S.CreationButton>
          </S.ProductsContainer>
        </S.ProductManagementContainer>
      </>
    )
  );
};

