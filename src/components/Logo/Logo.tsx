import Link from 'next/link';

import * as S from './styles';

export const Logo = () => {
  return (
    <S.Container>
      <Link href="/">
        <S.Logo
          src="/assets/images/logo.png"
          alt="Logo"
          title="Logo"
          height={500}
          width={500}
          quality={100}
          priority
        />
      </Link>
    </S.Container>
  );
};
