'use client'
import { IProduct } from "@/interface/IProduct"
import styled from "styled-components"

const CardContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 1.5em;
    background-color: #e6e6e6;

`
const ContainerText = styled.div`
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    padding: 1em;
`
const ContainerImg = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    flex-grow: 1;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    border-radius: 1em;
    padding: 1em;
`
const Title = styled.p`
    font-size: 16px;
`
const Description = styled.p`
    font-size: 14px;
`
const Price = styled.p`
font-size: 18px;
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
        <ContainerText>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Price>{'R$ '+price}</Price>
        </ContainerText>
        <ContainerImg>
            <img src={img} alt={'Foto '+title}/>
        </ContainerImg>
    </CardContainer>
  )
}

export default Card