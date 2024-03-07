import { Logo } from '@/components/Logo';
import { SignOutButton } from '@/components/SignOutButton';
import { ListDashes, DeviceMobile } from '@/components/Icons';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <section className='flex justify-center items-center gap-4'>
        <Logo />

        <S.Link href="/">
          <ListDashes size={20} weight='fill' />
          <S.LinkTitle>Lista de Produtos</S.LinkTitle>
        </S.Link>

        <S.Link href="/newproduct">
          <DeviceMobile size={20} weight='fill' />
          <S.LinkTitle>Criar Produtos</S.LinkTitle>
        </S.Link>
      </section>

      <section className='mr-4'>
        <SignOutButton />
      </section>
    </S.Container>
  );
};
