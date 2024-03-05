'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import * as S from './styles';

type InvalidUserMessageProps = {
  isUserValid: boolean;
}

export const InvalidUserMessage = ({ isUserValid }: InvalidUserMessageProps) => {
  const router = useRouter();

  const redirectToLoginPage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    router.push('/login');
  }

  return (
    !isUserValid && (
      <S.Container>
        <S.Title>
          Usuário inválido, faça o login para acessar a página.
        </S.Title>

        <S.Button
          type="button"
          title="Ir para a tela de login"
          aria-label="Ir para a tela de login"
          onClick={redirectToLoginPage}
        >
          Ir para a tela de login
        </S.Button>
      </S.Container>
    )
  );
}
