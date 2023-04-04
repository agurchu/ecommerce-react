import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
  const { id, productImage, productName, price, link } = props.data;

  const { handleRemoveFromCart, cartItems, handleAddToCart, updateItemCount } =
    useContext(ShopContext);

  return (
    <Container>
      <div>
        <img src={productImage} alt="" />
      </div>

      <Content>
        <div>
          <h3 className="item__title">{productName}</h3>
          <span>R{price}</span>
        </div>
        <Btns>
          <HandleCounter>
            <button onClick={() => handleRemoveFromCart(id)}>-</button>
            <input
              onChange={(e) => updateItemCount(Number(e.target.value), id)}
              value={cartItems[id]}
            />
            <button onClick={() => handleAddToCart(id)}>+</button>
          </HandleCounter>
          <a href={link}>Visit Here</a>
        </Btns>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background: var(--color-trans-02);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 20rem;
  max-width: 68rem;
  overflow: hidden;

  transition: all 0.25s;
  width: 100%;

  &:hover {
    background: var(--color-secondary);
  }

  div {
    width: 20rem;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    max-height: 68rem;
    min-height: 55rem;
    div {
      height: 65%;
      width: 100%;
    }
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    h3 {
      width: 70%;
    }
    span {
      font-size: 3rem;
      font-family: var(--font-family);
      color: var(--color-primary);
    }
  }

  @media screen and (max-width: 600px) {
    div {
      flex-direction: column;
      justify-content: flex-start;

      h3 {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`;

const Btns = styled.div`
  display: flex;
  position: relative;

  a {
    right: 0;
    bottom: 0;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    padding: 1.5rem 3rem;
    border-radius: 8px;
    position: absolute;
    font-weight: 600;
    font-size: 1.6rem;
    transition: all 0.25s;

    &:hover {
      background: var(--color-primary);
      color: var(--color-secondary);
    }
  }
`;

const HandleCounter = styled.div`
  left: 0;
  bottom: 0;
  position: absolute !important;
  height: auto !important;
  display: flex;
  flex-direction: row !important;
  width: auto !important;
  border-radius: 6px;
  overflow: hidden;
  border: 3px solid var(--color-trans-01);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  button {
    padding: 0.5rem 1.5rem;
    font-size: 2rem;
    color: var(--color-accent);

    background: var(--color-trans-01);
  }
  input {
    width: 7rem;
    text-align: center;
  }
`;
