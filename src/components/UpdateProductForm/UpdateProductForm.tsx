'use client';

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import { getProductById, updateProduct } from "@/api";
import { UpdatableProductInfo } from "@/types";

import * as S from './styles';

type UpdateProductFormProps = {
  productId: string;
}

export const UpdateProductForm = ({ productId }: UpdateProductFormProps) => {
  const [message, setMessage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<UpdatableProductInfo>({
    id: 0,
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: ""
  });

  const [formData, setFormData] = useState<UpdatableProductInfo>({
    id: 0,
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: ""
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
  
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormDataValid = () => {
    const { name, brand, model, price, color } = formData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const cancelEdition = () => router.push('/');

  const getProduct = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getProductById(token, productId);
  
      if (response && response.data) {
        setSelectedProduct(response.data);
        setFormData(response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  const onUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await updateProduct(token, formData);

      if (response) setMessage("Produto atualizado com sucesso!");
    } catch (error) {
      setMessage("Você não possui autorização para editar produtos!");
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <S.Container>
      <S.Title>Editando {selectedProduct.name}</S.Title>

      <form onSubmit={onUpdate}>
        <S.InputSection>
          <S.Label htmlFor="name">
            Nome
          </S.Label>

          <S.Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </S.InputSection>

        <S.InputSection>
          <S.Label htmlFor="brand">
            Marca
          </S.Label>

          <S.Input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </S.InputSection>

        <S.InputSection>
          <S.Label htmlFor="model">
            Modelo
          </S.Label>

          <S.Input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </S.InputSection>

        <S.InputSection>
          <S.Label htmlFor="price">
            Preço
          </S.Label>

          <S.Input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </S.InputSection>

        <S.InputSection>
          <S.Label htmlFor="color">
            Cor
          </S.Label>

          <S.Input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </S.InputSection>

        {message && <S.Message>{message}</S.Message>}

        <S.ButtonSection>
          <S.ConfirmButton
            type="submit"
            title="Confirmar edição"
            aria-label="Confirmar edição"
            disabled={!isFormDataValid()}
            className={!isFormDataValid() ? 'bg-opacity-50' : ''}
          >
            Confirmar
          </S.ConfirmButton>

          <S.CancelButton
            type="button"
            title="Cancelar edição"
            aria-label="Cancelar edição"
            disabled={false}
            className={false ? 'bg-opacity-50' : ''}
            onClick={cancelEdition}
          >
            Cancelar
          </S.CancelButton>
        </S.ButtonSection>
      </form>
    </S.Container>
  )
};
