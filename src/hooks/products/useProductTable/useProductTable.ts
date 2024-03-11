import { deleteProduct, getProducts } from "@/api";
import { Product, DeletableProductInfo } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [isUserValid, setIsUserValid] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
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

  const filteredProductData = productData.filter((product) => {
    const searchRegex = new RegExp(searchTerm, "i");

    return (
      searchRegex.test(product.name) ||
      searchRegex.test(product.brand) ||
      searchRegex.test(product.model) ||
      searchRegex.test(product.price.toString()) ||
      searchRegex.test(product.color)
    );
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

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
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await getProducts(token);

      if (response?.statusCode === 200 && response.message) {
        setIsUserValid(true);
        setProductData(response.message);
        setIsLoading(false);
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
    isLoading,
    message,
    isDeleteModalOpen,
    selectedProduct,
    closeDeleteModal,
    onDelete,
    tableHeaders,
    updateProduct,
    openDeleteModal,
    searchTerm,
    handleSearchChange,
    filteredProductData
  }
};
