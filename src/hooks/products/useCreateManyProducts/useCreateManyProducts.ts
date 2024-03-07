import { useState } from "react";
import { createManyProducts } from "@/api";
import { FormattedProduct, SimpleProduct } from "@/types";

export const useCreateManyProducts = () => {
  const [bulkFormMessage, setBulkFormMessage] = useState("");
  const [bulkProductsContainerMessage, setBulkProductsContainerMessage] = useState("");
  const [isBulkFormOpen, setIsBulkFormOpen] = useState(false);
  const [simpleProducts, setSimpleProducts] = useState<SimpleProduct[]>([]);
  const [bulkFormData, setBulkFormData] = useState<SimpleProduct>({
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: ""
  });

  const openBulkForm = () => setIsBulkFormOpen(true);
  const closeBulkForm = () => setIsBulkFormOpen(false);

  const bulkFormHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBulkFormMessage("");
  
    const { name, value } = e.target;
    setBulkFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isBulkFormDataValid = () => {
    const { name, brand, model, price, color } = bulkFormData;
    return name.trim() !== "" && brand.trim() !== "" && model.trim() !== "" && price > 0 && color.trim() !== "";
  };

  const addProduct = (e: React.FormEvent) => {
    e.preventDefault();

    setBulkFormMessage("Produto adicionado com sucesso!");
    setSimpleProducts((prevState) => [...prevState, bulkFormData]);

    setTimeout(() => {
      setBulkFormMessage("");
    }, 3000);
  }

  const formatProducts = (products: SimpleProduct[]): FormattedProduct[] => {
    const formattedProducts: FormattedProduct[] = [];
 
    products.forEach((product) => {
      const existingProductIndex = formattedProducts.findIndex(
        (formattedProduct) =>
          formattedProduct.name === product.name &&
          formattedProduct.brand === product.brand &&
          formattedProduct.model === product.model
      );
  
      if (existingProductIndex !== -1) {
        formattedProducts[existingProductIndex].data.push({
          price: product.price,
          color: product.color,
        });
      } else {
        const newFormattedProduct: FormattedProduct = {
          name: product.name,
          brand: product.brand,
          model: product.model,
          data: [
            {
              price: product.price,
              color: product.color,
            },
          ],
        };
  
        formattedProducts.push(newFormattedProduct);
      }
    });
  
    return formattedProducts;
  };

  const isCreationButtonAbled = () => simpleProducts.length > 0;

  const onCreateManyProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const products = formatProducts(simpleProducts);

      const response = await createManyProducts(token, products);

      if (response?.statusCode === 201) {
        setBulkProductsContainerMessage("Os produtos foram criados com sucesso!");

        setTimeout(() => {
          setBulkProductsContainerMessage("");
          setSimpleProducts([]);
        }, 3000);
      } else {
        setBulkProductsContainerMessage("Você não possui autorização para criar produtos. Tente realizaro o login!");
      }
    } catch (error) {
      console.error(`Você não possui autorização para criar produtos: ${error}`);
    }
  };

  return {
    bulkFormMessage,
    bulkProductsContainerMessage,
    isBulkFormOpen,
    isBulkFormDataValid,
    isCreationButtonAbled,
    closeBulkForm,
    bulkFormHandleChange,
    addProduct,
    simpleProducts,
    onCreateManyProducts,
    openBulkForm
  };
};
