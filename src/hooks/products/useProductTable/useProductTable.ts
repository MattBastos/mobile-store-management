import { deleteProduct, getProducts } from "@/api";
import { Product, DeletableProductInfo } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useProductTable = () => {
  const [message, setMessage] = useState("");
  const [isUserValid, setIsUserValid] = useState(true);
  const [productData, setProductData] = useState<Product[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<DeletableProductInfo>({
    id: 0,
    name: '',
    model: ''
  });

  const router = useRouter();

  const tableHeaders = [
    'Nome',
    'Marca',
    'Modelo',
    'Preço',
    'Cor',
    'Ações'
  ];

  const openDeleteModal = (productData: DeletableProductInfo) => {
    setSelectedProduct(() => ({ ...productData }));
    setIsDeleteModalOpen(true);
  }

  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const onDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await deleteProduct(token, selectedProduct.id);

      setMessage(`${selectedProduct.name} deletado com sucesso!`);
      fetchData();
      closeDeleteModal();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  }

  const updateProduct = (productId: number) => router.push(String(productId));

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getProducts(token);

      if (response?.statusCode === 200 && response.message) {
        setIsUserValid(true);
        setProductData(response.message);
      } else {
        setIsUserValid(false);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  return {
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
  }
};
