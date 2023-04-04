import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/shop-context";

function Product(props) {
  const { handleAddToCart, cartItems } = useContext(ShopContext);

  const { id, productName, price, productImage, link } = props.data;

  const cartItemAmount = cartItems[id];
  return (
    <ProductContainer>
      <img src={productImage} alt="" />

      <Description>
        <div>
          <h3>{productName}</h3>
        </div>
        <p>R{price}</p>
      </Description>
      <BtnsContainer>
        <AddBtn onClick={() => handleAddToCart(id)}>
          Add To Cart{" "}
          {cartItemAmount > 0 && (
            <span className="count__cart"> {cartItemAmount}</span>
          )}
        </AddBtn>
        <UrlBtn href={link} target="_blank">
          Visit Here
        </UrlBtn>
      </BtnsContainer>
    </ProductContainer>
  );
}

export default Product;

const ProductContainer = styled.div`
  background: white;
  border-radius: 15px;
  display: flex;

  flex-direction: column;
  width: 100%;
  height: auto;
  overflow: hidden;
  align-items: flex-start;
  &:hover {
    transition: ease-in 0.25s;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;

const Description = styled.div`
  display: flex;

  width: 100%;
  border-radius: 8px;
  justify-content: space-between;
  padding: 10px;
  align-items: flex-start;
  text-align: left;
  overflow: hidden;

  div {
    width: 70%;
    overflow: hidden;
  }
  p {
    font-size: 2rem;
    color: var(--color-accent);
  }
  h3 {
    white-space: nowrap;
    font-size: 1.6rem;
    font-family: var(--font-family);
  }
`;

const AddBtn = styled.a`
  align-items: center;
  border-top: 2px solid var(--color-primary);

  color: var(--color-secondary);
  display: flex;
  font-family: var(--font-family);
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: center;
  position: relative;
  padding: 15px;
  width: 100%;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    color: var(--color-primary);
    background: var(--color-secondary);
  }
`;

const UrlBtn = styled(AddBtn)`
  border-left: 2px solid var(--color-primary);
`;

const BtnsContainer = styled.div`
  display: flex;
  width: 100%;
`;
