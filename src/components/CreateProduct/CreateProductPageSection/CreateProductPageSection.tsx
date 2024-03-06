'use client';

import { useState, useEffect} from "react";
import { useCreateSimpleProduct } from "@/hooks";
import { createDetailedProduct, validateUser } from "@/api";
import { DetailedProduct } from "@/types";

import { CreateProductPageCard } from "@/components/CreateProduct";
import { SimpleProductForm, DetailedProductForm } from "@/components/CreateProduct";
import { InvalidUserMessage } from "@/components/InvalidUserMessage";

import * as S from './styles';

export const CreateProductPageSection = () => {
  const [isUserValid, setIsUserValid] = useState(false);
  const [detailedFormMessage, setDetailedFormMessage] = useState("");
  const [isDetailedFormOpen, setIsDetailedFormOpen] = useState(false);
  const [detailedFormData, setDetailedFormData] = useState<DetailedProduct>({
    name: "",
    details: {
      brand: "",
      model: "",
      color: ""
    },
    price: 0,
  });

  const detailedStructure = [
    "Nome", "Detalhes: Marca, Modelo, Cor...", "Preço"
  ];

  const openDetailedForm = () => setIsDetailedFormOpen(true);
  const closeDetailedForm = () => setIsDetailedFormOpen(false);

  const detailedFormHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailedFormMessage("");
  
    const { name, value } = e.target;
  
    if (name === 'name' || name === 'price') {
      setDetailedFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setDetailedFormData((prevData) => ({
        ...prevData,
        details: {
          ...prevData.details,
          [name]: value,
        },
      }));
    }
  };

  const isDetailedFormDataValid = () => {
    const { name, details: { brand, model, color }, price } = detailedFormData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const onCreateDetailedProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await createDetailedProduct(token, detailedFormData);

      if (response?.statusCode === 201) {
        setDetailedFormMessage("Produto criado com sucesso!");

        setTimeout(() => {
          setDetailedFormMessage("");
        }, 3000);
      } else {
        setDetailedFormMessage("Você não possui autorização para criar produtos. Tente realizaro o login!");
      }
    } catch (error) {
      console.error(`Você não possui autorização para criar produtos: ${error}`);
    }
  };

  /////////////////////////////////////////////////////////////////////////

  const {
    simpleFormMessage,
    isSimpleFormOpen,
    isSimpleFormDataValid,
    closeSimpleForm,
    simpleFormHandleChange,
    onCreateSimpleProduct,
    simpleStructure,
    openSimpleForm
  } = useCreateSimpleProduct();

  const validateToken = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const response = await validateUser(token);
      console.log(response);

      if (response && response.statusCode === 200) {
        setIsUserValid(true);
      } else {
        setIsUserValid(false);
      }
    }
  }

  const manyProductsStructure = [
    "Nome", "Marca", "Modelo", "Cores e Preços"
  ];

  useEffect(() => {
    validateToken()
  }, []);

  return (
    <S.Container>
      <InvalidUserMessage isUserValid={isUserValid}/>

      {isUserValid && (
        <>
          <SimpleProductForm
            message={simpleFormMessage}
            isFormOpen={isSimpleFormOpen}
            isFormDataValid={!isSimpleFormDataValid()}
            closeForm={closeSimpleForm}
            onChange={simpleFormHandleChange}
            onSubmit={onCreateSimpleProduct}
          />

          <DetailedProductForm
            message={detailedFormMessage}
            isFormOpen={isDetailedFormOpen}
            isFormDataValid={!isDetailedFormDataValid()}
            closeForm={closeDetailedForm}
            onChange={detailedFormHandleChange}
            onSubmit={onCreateDetailedProduct}
          />

          <CreateProductPageCard
            title="Produto Simples"
            description="Crie um produto de forma rápida e fácil."
            productStructure={simpleStructure}
            onClick={openSimpleForm}
          />

          <CreateProductPageCard
            title="Produto Detalhado"
            description="Crie um produto com informações detalhadas."
            productStructure={detailedStructure}
            onClick={openDetailedForm}
          />

          <CreateProductPageCard
            title="Criar Produtos"
            description="Crie vários produtos de uma vez."
            productStructure={manyProductsStructure}
            onClick={() => {}}
          />
        </>
      )}
    </S.Container>
  );
};
