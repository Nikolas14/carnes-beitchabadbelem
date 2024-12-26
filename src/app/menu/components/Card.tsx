'use client'
import { IProduct } from "@/interface/IProduct"
import styled from "styled-components"
import Image from "next/image"
import { useState } from "react"

const CardContainer = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1.5em;
    border: 1px #000000 solid;
    background-color: #f7f7f7;
    gap: 2em;
    padding: 0.5em;

`
const ContainerText = styled.div`
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    border-radius: 1.5em;
    border: 1px #fd0101 solid;

`
const ContainerImg = styled.div`
    border-radius: 1em;
    padding: 1em;
    border: 1px #2f01fd solid;

`
const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    flex-grow: 2;
    border-radius: 1.5em;
    border: 1px rgb(1, 253, 43) solid;
`
const Title = styled.p`
    font-size: 16px;
    margin-left: 8px;

`
const Description = styled.p`
    font-size: 14px;
    margin-left: 8px;

`
const Price = styled.p`
    font-size: 18px;
    margin-left: 8px;

`

interface CardProps {
    product: IProduct;
    onClick?: (product: IProduct) => void;
  }

  const Card: React.FC<CardProps> = ({  product, onClick }) => {
    const {id, title, description, price, img } = product;

    const [amount, setAmount] = useState<number>(0)

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if (onClick) {
          onClick(product);
        }
      };
    
    
  return (
    <CardContainer onClick={handleClick}>
        <ContainerImg>
            <Image src={product.img} alt={`Foto de ${product.title}`} width={100} height={100} />
        </ContainerImg>
        <ContainerText>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Price>{'R$ '+price}</Price>
        </ContainerText>
        <ContainerButtons>
            <button onClick={()=>setAmount(amount-1)}> - </button>
            <Description>KG: {amount}</Description>
            <button onClick={()=>setAmount(amount+1)}> + </button>
        </ContainerButtons>
    </CardContainer>
  )
}

export default Card