import * as S from './styles';

export const LoginForm = () => {
  return (
    <form>
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

      <S.ButtonSection>
        <S.Button>
          Login
        </S.Button>
      </S.ButtonSection>
    </form>
  )
};
