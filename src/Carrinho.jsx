import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';

const PageTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #000000;
  margin-bottom: 1em;
  margin-top: 2em;
`;


const CarrinhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contador = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
  margin-top: 2em;
`;

const ContadorText = styled.h2`
  font-size: 2em;
  text-align: center;
  color: #000000;
  margin-bottom: 1em;
  margin-top: 2em;
`;


const BotaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em; /* Espaço entre os botões */
`;

const Carrinho = () => {
  const [quantidade, setQuantidade] = useState(0);

  const adicionarItem = () => {
    setQuantidade(quantidade + 1);
  };

  const removerItem = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className='CarrinhoPage'>
      <CarrinhoContainer>
        <PageTitle>Carrinho</PageTitle>
        <FaShoppingCart size={100} />
        {quantidade === 0 ? (
          <ContadorText>Parece que seu carrinho está vazio.</ContadorText>
        ) : (
          <>
            <Contador>{quantidade}</Contador>
          </>
        )}
        <BotaoContainer>
          <Button variant="success" onClick={adicionarItem}>Adicionar ao carrinho</Button>
          <Button variant="danger" onClick={removerItem}>Remover do carrinho</Button>
        </BotaoContainer>  
      </CarrinhoContainer>
    </div>
  );
};

export default Carrinho;
