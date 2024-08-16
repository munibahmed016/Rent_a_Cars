import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREEN } from "./responsive";
import menuStyles from "./menuStyles";

// Styled components for the list container and navigation items
const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li`
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
    hover:text-gray-700

  `}
`;

const Link = styled.a`
  ${tw`
    text-inherit
    hover:text-gray-700
  `}
  text-decoration: none;
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
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
