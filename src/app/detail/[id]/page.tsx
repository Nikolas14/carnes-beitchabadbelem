'use client'
import { IProduct } from "@/interface/IProduct";
import { useEffect, useState } from "react";
import products from '../../../data/data'
import { useRouter } from "next/navigation";


const Detail = () => {

  const router = useRouter();
  const id = '5'

  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(product => product.id === id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <img src={product.img} alt={`Foto de ${product.title}`} />
    </div>
  )
}

export default Detail