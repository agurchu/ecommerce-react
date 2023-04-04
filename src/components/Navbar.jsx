import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShoppingCart } from "phosphor-react";

function Navbar() {
  return (
    <HeaderNavbar className="container">
      <Logo to="/">
        <img src="kj_dev_long_logo_white.png" alt="" />
      </Logo>
      <NavLinks>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={30} />
        </Link>
      </NavLinks>
    </HeaderNavbar>
  );
}

export default Navbar;

const HeaderNavbar = styled.nav`
  background: var(--color-text-01);
  width: 100%;
  position: fixed;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.ul`
  align-items: center;
  display: flex;

  a {
    color: var(--color-primary);
    font-size: 2.5rem;
    margin-left: 25px;
    transition: all 0.25s;

    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const Logo = styled(Link)`
  height: 45px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.25s;

    &:hover {
      filter: brightness(75%);
    }
  }
`;
