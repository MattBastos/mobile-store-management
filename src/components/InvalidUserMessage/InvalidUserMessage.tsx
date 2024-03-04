'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import * as S from './styles';

export const InvalidUserMessage = () => {
  const router = useRouter();

  const redirectToLoginPage = () => router.push('/login');

  return (
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
  );
}
