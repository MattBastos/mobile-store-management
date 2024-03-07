'use client';

import { useLogin } from '@/hooks';
import * as S from '../styles';

export const LoginForm = () => {
  const { handleSubmit, handleChange, error, isFormDataValid } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <S.InputSection>
        <S.Label htmlFor="email">
          Email
        </S.Label>

        <S.Input
          type="email"
          id="email"
          name="email"
          placeholder="email@email.com"
          onChange={handleChange}
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
          placeholder='Mínimo de 6 caracteres.'
          onChange={handleChange}
        />
      </S.InputSection>

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      <S.ButtonSection>
        <S.Button
          type="submit"
          title="Efetuar login"
          aria-label="Efetuar login"
          disabled={!isFormDataValid()}
          className={!isFormDataValid() ? 'bg-opacity-50' : ''}
        >
          Login
        </S.Button>
      </S.ButtonSection>
    </form>
  )
};
