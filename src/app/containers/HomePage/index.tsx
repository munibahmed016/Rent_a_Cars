import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";

const PageConatiner = styled.div`
    ${
        tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        `
    }
`;

export function HomePage (){
    return <PageConatiner>
        <Navbar/>
        <TopSection/>
    </PageConatiner>
}