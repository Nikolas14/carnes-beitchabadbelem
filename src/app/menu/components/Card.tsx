'use client'
import { IProduct } from "@/interface/IProduct"
import styled from "styled-components"
import Image from "next/image"

const CardContainer = styled.div`
    width: 30%;
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
    </CardContainer>
  )
}

export default Card