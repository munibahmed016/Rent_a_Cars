import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "./responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

// Corrected NavItem declaration with generics
const NavItem = styled.li<{ menu?: boolean }>`
  ${tw`
    text-xs
    md:text-base
    font-medium
    text-black
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-200
    ease-in-out
    hover:text-red-500
  `};
  
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-red-500
      `}
    `}
`;

const Link = styled.a`
  ${tw`
    text-inherit
    hover:text-red-500
    whitespace-nowrap
  `}
  text-decoration: none;
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <Link href="#">Home</Link>
          </NavItem>
          <NavItem menu>
            <Link href="#">Cars</Link>
          </NavItem>
          <NavItem menu>
            <Link href="#">Services</Link>
          </NavItem>
          <NavItem menu>
            <Link href="#">Contact us</Link>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <Link href="#">Home</Link>
      </NavItem>
      <NavItem>
        <Link href="#">Cars</Link>
      </NavItem>
      <NavItem>
        <Link href="#">Services</Link>
      </NavItem>
      <NavItem>
        <Link href="#">Contact us</Link>
      </NavItem>
    </ListContainer>
  );
}
