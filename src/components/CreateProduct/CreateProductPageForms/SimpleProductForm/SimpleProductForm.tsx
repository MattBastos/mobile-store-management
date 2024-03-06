import * as S from '../styles';

export const SimpleProductForm = () => {
  return (
    <S.Container>
      <S.Title>Insira as informações do produto:</S.Title>

      <form onSubmit={() => {}}>
        <S.InputSection>
          <S.Label htmlFor="name">
            Nome
          </S.Label>
          <S.Input
            type="text"
            id="name"
            name="name"
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
          />
        </S.InputSection>

        {false && <S.Message>{}</S.Message>}

        <S.ButtonSection>
          <S.ConfirmButton
            type="submit"
            title="Confirmar edição"
            aria-label="Confirmar edição"
            disabled={false}
            className={false ? 'bg-opacity-50' : 'hover:bg-green-600'}
          >
            Confirmar
          </S.ConfirmButton>
          
          <S.CancelButton
            type="button"
            title="Cancelar edição"
            aria-label="Cancelar edição"
            disabled={false}
          >
            Cancelar
          </S.CancelButton>
        </S.ButtonSection>
      </form>
    </S.Container>
  );
};
