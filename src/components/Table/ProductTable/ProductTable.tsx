'use client';

import { getProducts } from "@/api";
import { Product } from "@/types";
import { useState, useEffect } from "react";

import { InvalidUserMessage } from "@/components/InvalidUserMessage";

export const ProductTable = () => {
  const [isUserValid, setIsUserValid] = useState(true);
  const [productData, setProductData] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const data = await getProducts(token);

      if (data) setProductData(data);
    } catch (error) {
      setIsUserValid(false);
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    console.log(isUserValid);
    fetchData();
  }, []);

  return (
    <>
      <InvalidUserMessage isUserValid={isUserValid}/>

      {productData.length === 0 ? (
          <h2 className="text-white">Nenhum produto registrado!</h2>
        ) : (
          productData.map((product, key) => (
            <h1 key={key} className="text-white">{product.name}</h1>
          )
        )
      )}
    </>
  );
};
