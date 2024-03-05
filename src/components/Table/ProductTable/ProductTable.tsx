'use client';

import { getProducts } from "@/api";
import { Product } from "@/types";
import { useState, useEffect } from "react";

import { InvalidUserMessage } from "@/components/InvalidUserMessage";

import * as S from './styles';

export const ProductTable = () => {
  const [isUserValid, setIsUserValid] = useState(true);
  const [productData, setProductData] = useState<Product[]>([]);

  const tableHeaders = [
    'Nome',
    'Marca',
    'Modelo',
    'Preço',
    'Cor',
    'Ações'
  ];

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getProducts(token);

      if (response && response.data) {
        setIsUserValid(true);
        setProductData(response.data);
      } else {
        setIsUserValid(false);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <InvalidUserMessage isUserValid={isUserValid}/>

      {productData.length === 0 && isUserValid ? (
        <S.NoProductsMessage>Nenhum produto registrado!</S.NoProductsMessage>
      ) : (
        <S.TableContainer className={ productData.length === 0 ? 'hidden' : '' }>
          <S.Table>
            <S.THead>
              <tr>
                {tableHeaders.map((th) => (
                  <S.TH scope="col" key={th}>
                    {th}
                  </S.TH>
                ))}
              </tr>
            </S.THead>
            <S.TBody>
              {productData.map((product) => (
                <S.TBodyRow key={product.id}>
                  <S.TD>{product.name}</S.TD>
                  <S.TD>{product.brand}</S.TD>
                  <S.TD>{product.model}</S.TD>
                  <S.TD>{product.price}</S.TD>
                  <S.TD>{product.color}</S.TD>
                  <S.TDActions>
                    <S.TableEditButton
                      type="button"
                      title="Editar produto"
                      aria-label="Editar produto"
                    >
                      Editar
                    </S.TableEditButton>

                    <S.TableDeleteButton
                      type="button"
                      title="Deletar produto"
                      aria-label="Deletar produto"
                    >
                      Deletar
                    </S.TableDeleteButton>
                  </S.TDActions>
                </S.TBodyRow>
              ))}
            </S.TBody>
          </S.Table>
        </S.TableContainer>
      )}
    </S.Container>
  );
};
