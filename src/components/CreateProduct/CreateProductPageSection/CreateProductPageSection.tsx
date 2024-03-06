import { CreateProductPageCard } from "@/components/CreateProduct";

export const CreateProductPageSection = () => {
  const simpleStructure = [
    "Nome", "Marca", "Modelo", "Preço", "Cor"
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
      <CreateProductPageCard
        title="Produto Simples"
        description="Crie produtos de forma rápida e fácil."
        productStructure={simpleStructure}
      />

      <CreateProductPageCard
        title="Produto Detalhado"
        description="Crie produtos com informações detalhadas."
        productStructure={simpleStructure}
      />

      <CreateProductPageCard
        title="Criar Muitos Produtos"
        description="Utilize esta opção para criar vários produtos de uma vez."
        productStructure={simpleStructure}
      />
    </section>
  );
};
