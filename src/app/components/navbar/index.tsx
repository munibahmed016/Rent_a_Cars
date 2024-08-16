import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";
 
const NavabarContainer = styled.div`
min-height: 68px;
    ${
        tw`
            flex
            flex-row
            items-center
            w-full
            max-w-screen-2xl
            lg:pl-12
            lg:pr-12
            justify-between
        `
    }
`;

const LogoConatiner = styled.div``;

export function Navbar () {
    return (
        <NavabarContainer>
        <LogoConatiner>
            <Logo/>
        </LogoConatiner>
        <NavItems />
    </NavabarContainer>

    )
}