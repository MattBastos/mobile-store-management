import * as S from './styles';

const fullYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <S.Container>
      <S.SeparatorLine />

      <S.Content>
        <S.Section>
          <h1 className="text-secondary">Logo</h1>
        </S.Section>

        <S.Section>
          <S.Title>Título da Seção</S.Title>

          <S.List>
            <S.Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.LinkTitle>Link Importante</S.LinkTitle>
            </S.Link>

            <S.Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.LinkTitle>Link Importante</S.LinkTitle>
            </S.Link>
          </S.List>
        </S.Section>

        <S.Section>
          <S.Title>Mapa do Site</S.Title>

          <S.List>
            <S.Link href="#">
              <S.LinkTitle>Link Importante</S.LinkTitle>
            </S.Link>

            <S.Link href="#">
              <S.LinkTitle>Link Importante</S.LinkTitle>
            </S.Link>
          </S.List>
        </S.Section>
      </S.Content>

      <S.CopyrightContainer>
        <S.CopyrightText>
          © {fullYear} Matthews Bastos. Todos os direitos reservados.
        </S.CopyrightText>
      </S.CopyrightContainer>
    </S.Container>
  );
}
