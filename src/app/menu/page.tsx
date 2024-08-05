'use client'
import React from 'react'
import Card from './components/Card'

import data from '../../data/data'
import styled from 'styled-components'
import { IProduct } from '@/interface/IProduct'

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`
const Menu = () => {
    const dataList = data

    const handleProductClick = (product: IProduct) => {
        console.log('Produto clicado:', product);
        // Faça algo com o produto clicado
      };

  return (
    <ListContainer>
        <h2>Menu</h2>
        {dataList.map((product , index)=>
                    <Card key={index} product={product} onClick={handleProductClick} />
        )}
    </ListContainer>
  )
}

export default Menu