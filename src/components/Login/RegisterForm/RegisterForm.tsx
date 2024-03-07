'use client';

import { useRegister } from '@/hooks';

import * as S from '../styles';

export const RegisterForm = () => {
  const { handleSubmit, handleChange, error, isFormDataValid } = useRegister();

  return (
    <form onSubmit={handleSubmit}>
      <S.InputSection>
        <S.Label htmlFor="username">
          Nome
        </S.Label>

        <S.Input
          type="text"
          id="username"
          name="username"
          placeholder="Mínimo de 5 caracteres."
          onChange={handleChange}
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
          placeholder="Mínimo de 6 caracteres."
          onChange={handleChange}
        />
      </S.InputSection>

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      <S.ButtonSection>
        <S.Button
          type="submit"
          title="Registrar novo usuário"
          aria-label="Registrar novo usuário"
          disabled={!isFormDataValid()}
          className={!isFormDataValid() ? 'bg-opacity-50' : ''}
        >
          Registrar
        </S.Button>
      </S.ButtonSection>
    </form>
  );
};
