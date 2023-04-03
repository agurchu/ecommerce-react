import React from "react";
import styled from "styled-components";

function Product(props) {
  const { id, productName, price, productImage, link } = props.data;
  return (
    <ProductContainer>
      <img src={productImage} alt="" />
      <Description>
        <a href={link} target="_blank">
          Visit Here
        </a>
        <h3>{productName}</h3>
        <p>R{price}</p>
      </Description>
    </ProductContainer>
  );
}

export default Product;

const ProductContainer = styled.div``;
const Description = styled.div``;
