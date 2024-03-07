import * as S from './styles';

type CreateProductPageCardProps = {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export const CreateProductPageCard = ({
  title,
  description,
  image,
  onClick
}: CreateProductPageCardProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>

      <S.SeparatorLine />

      <S.ImageContainer>
        <S.Image
          src={image}
          alt="Produto"
          title="Produto"
          height={500}
          width={500}
          quality={100}
          priority
        />
      </S.ImageContainer>

      <S.SeparatorLine />
    </S.Container>
  );
};
