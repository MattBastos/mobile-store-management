'use client';

import { useState, useEffect } from 'react';

import * as S from './styles';

export const WelcomeMessage = () => {
  const [userName, setUserName] = useState('');

  const getUserName = () => {
    const name = localStorage.getItem('username');
    if (name) setUserName(name);
  }

  useEffect(() => getUserName());

  return (
    <S.Title>
      {`Bem vindo, ${userName}`}
    </S.Title>
  );
};
