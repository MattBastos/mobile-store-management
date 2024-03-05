'use client';

import { useState, useEffect } from "react";

import { getProductById } from "@/api";
import { Product } from "@/types";

import { Layout } from "@/components/Layout";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    brand: "",
    model: "",
    price: 0,
    color: "",
    createdAt: "",
    updatedAt: ""
  });

  const getProduct = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getProductById(token, params.id);
  
      if (response && response.data) setProduct(response.data);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  useEffect(() => {
    getProduct();
  });

  return (
    <Layout>
      <h1 className="text-white text-4xl">{product.name}</h1>
    </Layout>
  )
}
