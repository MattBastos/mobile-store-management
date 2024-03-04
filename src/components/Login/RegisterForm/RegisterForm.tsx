import * as S from '../styles';

export const RegisterForm = () => {
  return (
    <form>
      <S.InputSection>
        <S.Label htmlFor="username">
          Nome
        </S.Label>

        <S.Input
          type="text"
          id="username"
          name="username"
        />
      </S.InputSection>

      <S.InputSection>
        <S.Label htmlFor="email">
          Email
        </S.Label>

        <S.Input
          type="email"
          id="email"
          name="email"
        />
      </S.InputSection>

      <S.InputSection>
        <S.Label htmlFor="password">
          Senha
        </S.Label>

        <S.Input
          type="password"
          id="password"
          name="password"
        />
      </S.InputSection>

      <S.InputSection>
        <S.Label htmlFor="confirmPassword">
          Confirmar Senha
        </S.Label>

        <S.Input
          type="password"
          id="confirmPassword"
          name="password"
        />
      </S.InputSection>

      <S.ButtonSection>
        <S.Button type="submit">
          Registrar
        </S.Button>
      </S.ButtonSection>
    </form>
  );
};
