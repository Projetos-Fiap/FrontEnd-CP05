import React from 'react'
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #000000;
  margin-bottom: 1em;
  margin-top: 2em;
`;

const CarrinhoContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 2px 2px 4px 3px #ddd;
  padding: 50px;
  max-width: 80%;
  border-radius: 10px;
  margin: 0 auto;
`;

const Carrinho = () => {
  return (
    <div>
      <CarrinhoContainer>
        <PageTitle>Carrinho</PageTitle>
      </CarrinhoContainer>
    </div>
  )
}

export default Carrinho
