import React from "react";
import styled from "styled-components";

function Shop() {
  return (
    <ShopContainer>
      <ShopTitle>
        <h1>Katlego J Dev Shop</h1>
      </ShopTitle>

      <Products></Products>
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
const Products = styled.div``;
