import React from "react";
import styled from "styled-components";
import { products } from "../../products";
import Product from "./Product";

function Shop() {
  return (
    <ShopContainer>
      <ShopTitle>
        <h1>Katlego J Dev Shop</h1>
      </ShopTitle>

      <ProductList>
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </ProductList>
    </ShopContainer>
  );
}

export default Shop;
const ShopContainer = styled.div``;
const ShopTitle = styled.div`
  h1 {
    font-family: var(--font-family);
  }
`;
const ProductList = styled.div``;
