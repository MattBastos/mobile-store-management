import { Logo } from '@/components/Logo';
import { SignOutButton } from '@/components/SignOutButton';

import * as S from './styles';


export const Header = () => {
  return (
    <S.Container>
      <section>
        <Logo />
      </section>

      <section className='mr-4'>
        <SignOutButton />
      </section>
    </S.Container>
  );
};
