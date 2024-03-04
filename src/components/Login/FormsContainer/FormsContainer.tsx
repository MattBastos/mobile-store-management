'use client';

import { useState } from "react";
import { LoginForm } from "@/components/Login";
import { RegisterForm } from "@/components/Login";

import * as S from './styles';

export const FormsContainer = () => {
  const [isRegistering, setRegistering] = useState(false);

  const toggleForm = () => setRegistering(!isRegistering);

  return (
    <S.Container>
      <S.Title>{isRegistering ? 'Registrar' : 'Login'}</S.Title>

      {isRegistering ? <RegisterForm /> : <LoginForm />}

      <S.SwitchFormContainer>
        <S.Text>
          {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}
        </S.Text>

        <S.UnderlinedText onClick={toggleForm}>
          {isRegistering ? 'Faça login.' : 'Registre-se.'}
        </S.UnderlinedText>
      </S.SwitchFormContainer>
    </S.Container>
  );
};
