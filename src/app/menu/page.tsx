'use client'
import React from 'react'
import Card from './components/Card'

import data from '../../data/data'
import styled from 'styled-components'
import { IProduct } from '@/interface/IProduct'
import { useRouter } from 'next/navigation'

const ListContainer = styled.div`
    align-items: center;
    gap: 1em;
`
const Menu = () => {
    const dataList = data
    const nav = useRouter()

    const handleProductClick = (product: IProduct) => {
        console.log('Produto clicado:', product);
        nav.push('/detail/'+product.id)
      };

  return (
    <ListContainer>
        <h2>Menu</h2>
        {dataList.map((product)=>
            <Card key={product.id} product={product} onClick={handleProductClick} />
        )}
    </ListContainer>
  )
}

export default Menu