'use client';

import { useRouter } from 'next/navigation';

import { DeviceMobile } from '@/components/Icons';

import * as S from './styles';

export const CreateProductButton = () => {
  const router = useRouter();

  return (
    <S.CreateProductButton
      type="button"
      title="Criar produto"
      aria-label="Criar produto"
      onClick={() => router.push('/newproduct')}
    >
      <DeviceMobile size={25} />

      <S.CreateProductTextButton>Criar</S.CreateProductTextButton>
    </S.CreateProductButton>
  );
};
