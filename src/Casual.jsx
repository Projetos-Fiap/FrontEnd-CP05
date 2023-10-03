import React from 'react'
import styled from 'styled-components';

// Importando carrossel do bootstrap
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

// Importando imagens
import img1 from './assets/casual/casual-1.jpg'
import img2 from './assets/casual/casual-2.jpg'
import img3 from './assets/casual/casual-3.jpg'
import img4 from './assets/casual/casual-4.jpg'
import img5 from './assets/casual/casual-5.jpg'

const PageTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #000000;
  margin-bottom: 1em;
  margin-top: 1em;
`;

const CarouselContainer = styled(Carousel)`
  max-width: 600px;
  max-height: auto;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 600px;
  height: auto; 
`;

const Casual = () => {
  return (
    <div className='CasualPage'>
      <PageTitle>Casual</PageTitle>
      <CarouselContainer>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <StyledImage src={img1} alt="Item 1" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img2} alt="Item 2" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img3} alt="Item 3" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img4} alt="Item 4" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img5} alt="Item 5" />
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
    </div>
  );
}

export default Casual;