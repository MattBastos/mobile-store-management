type CreateProductPageCardProps = {
  title: string;
  description: string;
  productStructure: string[];
}

export const CreateProductPageCard = ({
  title,
  description,
  productStructure
}: CreateProductPageCardProps) => {
  return (
    <section className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>

      <p className="mb-4">{description}</p>

      <section>
        {productStructure.map((structure) => (
          <span key={structure}>{structure}</span>
        ))}
      </section>
    </section>
  );
};
