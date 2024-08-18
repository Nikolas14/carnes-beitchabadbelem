'use client'
import { IProduct } from "@/interface/IProduct";
import { useEffect, useState } from "react";
import products from '../../../data/data'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content,;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 1.5em;
    border: 1px #000000 solid;
    background-color: #f7f7f7;
    gap: 2em;
    padding: 0.5em;

`
const Detail = ({ params }: { params: { id: string } }) => {

  const router = useRouter();

  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (params.id) {
      const foundProduct = products.find(product => product.id === params.id);
      setProduct(foundProduct || null);
    }
  }, [params.id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <Container>
      <p>Cortes beit chabad belem</p>

      <div>
        <Image src={product.img} alt={`Foto de ${product.title}`} width={500} height={300} />
        <h2>Preço: R${product.price.toFixed(2)}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <div>
        <button>Voltar</button>
        <button>Add ao carrinho</button>
      </div>
    </Container>
  )
}

export default Detail