'use client';

import { usePathname } from 'next/navigation';
import {
  DeviceMobile,
  ListDashes,
  LinkedinLogo,
  GithubLogo
} from '@/components/Icons';
import { Logo } from '@/components/Logo';

import * as S from './styles';

export const Footer = () => {
  const pathname = usePathname();
  const fullYear = new Date().getFullYear();

  return (
    <S.Container>
      <S.SeparatorLine />

      <S.Content>
        <S.Section>
          <Logo />
        </S.Section>

        <S.Section>
          <S.Title>Mídias Sociais</S.Title>

          <S.List>
            <S.Link
              href="https://www.linkedin.com/in/matthewsbastos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo weight='fill'/>
              <S.LinkTitle>Linkedin</S.LinkTitle>
            </S.Link>

            <S.Link
              href="https://github.com/MattBastos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo weight='fill' />
              <S.LinkTitle>Github</S.LinkTitle>
            </S.Link>
          </S.List>
        </S.Section>

        {pathname !== '/login' && (
          <S.Section>
            <S.Title>Mapa do Site</S.Title>

            <S.List>
              <S.Link href="/">
                <ListDashes weight='fill' />
                <S.LinkTitle>Lista de Produtos</S.LinkTitle>
              </S.Link>

              <S.Link href="/newproduct">
                <DeviceMobile weight='fill' />
                <S.LinkTitle>Criar Produtos</S.LinkTitle>
              </S.Link>
            </S.List>
          </S.Section>
        )}
      </S.Content>

      <S.CopyrightContainer>
        <S.CopyrightText>
          © {fullYear} Matthews Bastos. Todos os direitos reservados.
        </S.CopyrightText>
      </S.CopyrightContainer>
    </S.Container>
  );
}
