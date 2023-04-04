import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
  const { id, productImage, productName, price, link } = props.data;

  const { handleRemoveFromCart, cartItems } = useContext(ShopContext);

  return (
    <Container>
      <div>
        <img src={productImage} alt="" />
      </div>

      <Content>
        <Num>{cartItems[id]}</Num>
        <div>
          <h3 className="item__title">{productName}</h3>
          <span>R{price}</span>
        </div>
        <Btns>
          <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
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
      height: 75%;
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

    span {
      font-size: 2rem;
      font-family: var(--font-family);
      color: var(--color-primary);
    }
  }
`;

const Num = styled.span`
  align-items: center;
  background: var(--color-accent);
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  color: var(--color-primary);
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  height: 30px;
  justify-content: center;
  left: -15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;

  @media screen and (max-width: 600px) {
    left: 50%;
    top: -15px;
    transform: translateX(-50%);
  }
`;

const Btns = styled.div`
  display: flex;
  position: relative;

  button {
    left: 0;
    bottom: 0;
    color: var(--color-accent);
    border: 2px solid var(--color-trans-01);
    background: var(--color-trans-01);
  }
  button,
  a {
    padding: 1.5rem 3rem;
    border-radius: 8px;
    position: absolute;
    font-weight: 600;
    font-size: 1.6rem;
    transition: all 0.25s;

    &:hover {
      background: var(--color-primary);
    }
  }

  a {
    right: 0;
    bottom: 0;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);

    &:hover {
      color: var(--color-secondary);
    }
  }
`;
