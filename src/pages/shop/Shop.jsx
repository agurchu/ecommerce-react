import React from "react";
import styled from "styled-components";
import { products } from "../../products";
import Product from "./Product";

function Shop() {
  return (
    <ShopContainer>
      <ShopTitle>
        <h1 className="section__heading">Katlego J Dev Shop</h1>
      </ShopTitle>

      <ProductList className="container">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </ProductList>
    </ShopContainer>
  );
}

export default Shop;
const ShopContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

const ShopTitle = styled.div`
  margin: 100px 0 40px 0;
`;

const ProductList = styled.div`
  place-items: center;
  display: grid;
  width: 100%;
  height: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));

  @media (max-width: 370px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
