import { SignOutButton } from '@/components/SignOutButton';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <h1 className='ml-4'>Logo</h1>

      <section className='mr-4'>
        <SignOutButton />
      </section>
    </S.Container>
  );
};
