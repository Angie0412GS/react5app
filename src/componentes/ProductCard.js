import React from "react";  
import styled from "styled-components";
import img from '../Img/img2.jfif'

const Card = styled.div`
  border: 1px solid orange;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 6px 12px orange;
  }
  
`;
const ProfileImage =styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;

`;

const ProductName = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;
const ProducDescriptcion = styled.p`
color: #555;

`;

const BuyButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: orange;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: green;
  }
`;

const ProductCard = () => {
  return (
    <Card>
      <ProfileImage src={img} alt="Profail"/>
      <ProductName>Flores Amarillas</ProductName>
      <ProducDescriptcion>Simboliza alegría, amistad y nuevos comienzos, celebrando la llegada de la primavera con energía y cariño.</ProducDescriptcion>
      <BuyButton>Comprar</BuyButton>
    </Card>
  );
};

export default ProductCard;
