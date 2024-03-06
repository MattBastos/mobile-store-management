'use client';

import { useEffect } from "react";

import { InvalidUserMessage } from "@/components/InvalidUserMessage";
import { DeleteModal } from "@/components/Table";
import { CreateProductButton } from "@/components/Table";

import * as S from './styles';
import { useProductTable } from "@/hooks";

export const ProductTable = () => {
  const {
    fetchData,
    isUserValid,
    message,
    productData,
    isDeleteModalOpen,
    selectedProduct,
    closeDeleteModal,
    onDelete,
    tableHeaders,
    updateProduct,
    openDeleteModal
  } = useProductTable();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <InvalidUserMessage isUserValid={isUserValid}/>

      {message && <S.Message>{message}</S.Message>}

      <CreateProductButton />

      {productData.length === 0 && isUserValid ? (
        <S.NoProductsMessage>Nenhum produto registrado!</S.NoProductsMessage>
      ) : (
        <S.TableContainer className={ productData.length === 0 ? 'hidden' : '' }>
          <DeleteModal
            isModalOpen={isDeleteModalOpen}
            productName={selectedProduct.name}
            productModel={selectedProduct.model}
            closeModal={closeDeleteModal}
            handleConfirm={onDelete}
          />

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
                      onClick={() => updateProduct(product.id)}
                    >
                      Editar
                    </S.TableEditButton>

                    <S.TableDeleteButton
                      type="button"
                      title="Deletar produto"
                      aria-label="Deletar produto"
                      onClick={() => openDeleteModal(product)}
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
