import styled from "styled-components";
import { products } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

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
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: R{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h2> is Empty</h2>
      )}
    </CartContainer>
  );
}

export default Cart;
const CartContainer = styled.div``;
const CartItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
