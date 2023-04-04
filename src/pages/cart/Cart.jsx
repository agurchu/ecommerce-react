import styled from "styled-components";
import { products } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <CartContainer className="container container__padding-top">
      <div>
        <h1 className="section__heading">Your Cart Items</h1>
      </div>
      <CartItems>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </CartItems>
    </CartContainer>
  );
}

export default Cart;
const CartContainer = styled.div``;
const CartItems = styled.div``;
