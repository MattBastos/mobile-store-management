import * as S from '../styles';

type SimpleProductFormProps = {
  isFormOpen: boolean;
  isFormDataValid: boolean;
  closeForm: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SimpleProductForm = ({
  isFormOpen,
  isFormDataValid,
  closeForm,
  onChange
}: SimpleProductFormProps) => {
  return (
    isFormOpen && (
      <>
        <S.OverlayBackdrop onClick={closeForm}/>

        <S.FormContainer>
          <S.Title>Insira as informações do produto</S.Title>

          <form onSubmit={() => {}}>
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

            {false && <S.Message>{}</S.Message>}

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
        </S.FormContainer>
      </>
    )
  );
};
