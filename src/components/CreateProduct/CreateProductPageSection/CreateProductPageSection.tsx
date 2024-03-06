import { CreateProductPageCard } from "@/components/CreateProduct";

import * as S from './styles';

export const CreateProductPageSection = () => {
  const simpleStructure = [
    "Nome", "Marca", "Modelo", "Preço", "Cor"
  ];

  const detailedStructure = [
    "Nome", "Detalhes: Marca, Modelo, Cor...", "Preço"
  ];

  const manyProductsStructure = [
    "Nome", "Marca", "Modelo", "Cores e Preços"
  ];

  return (
    <S.Container>
      <CreateProductPageCard
        title="Produto Simples"
        description="Crie um produto de forma rápida e fácil."
        productStructure={simpleStructure}
      />

      <CreateProductPageCard
        title="Produto Detalhado"
        description="Crie um produto com informações detalhadas."
        productStructure={detailedStructure}
      />

      <CreateProductPageCard
        title="Criar Produtos"
        description="Crie vários produtos de uma vez."
        productStructure={manyProductsStructure}
      />
    </S.Container>
  );
};
