import * as S from './styles';

type CreateProductPageCardProps = {
  title: string;
  description: string;
  productStructure: string[];
  onClick: () => void;
}

export const CreateProductPageCard = ({
  title,
  description,
  productStructure,
  onClick
}: CreateProductPageCardProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>

      <S.SeparatorLine />

      <S.DetailsContainer>
        {productStructure.map((structure) => (
          <S.TextDetails key={structure}>{structure}</S.TextDetails>
        ))}
      </S.DetailsContainer>

      <S.SeparatorLine />
    </S.Container>
  );
};
