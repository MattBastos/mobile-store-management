'use client';

import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { SignOutButton } from '@/components/SignOutButton';
import { ListDashes, DeviceMobile } from '@/components/Icons';

import * as S from './styles';

export const Header = () => {
  const pathname = usePathname();

  return (
    pathname !== '/login' && (
      <S.Container>
        <S.Nav>
          <Logo />

          <S.Link href="/">
            <ListDashes size={20} weight='fill' />
            <S.LinkTitle>Lista de Produtos</S.LinkTitle>
          </S.Link>

          <S.Link href="/newproduct">
            <DeviceMobile size={20} weight='fill' />
            <S.LinkTitle>Criar Produtos</S.LinkTitle>
          </S.Link>
        </S.Nav>

        <S.SignOutButtonContainer>
          <SignOutButton />
        </S.SignOutButtonContainer>
      </S.Container>
    )
  );
};
