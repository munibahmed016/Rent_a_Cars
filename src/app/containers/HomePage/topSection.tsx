import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${
        tw`
            w-full
            max-w-screen-2xl
            flex
            justify-between
            pl-3
            pr-3
            lg:pl-12
            lg:pr-12

        `
    }
`;

const LeftContainer = styled.div`
    ${
        tw`
            flex
            flex-col
            w-1/2
        `
    }
`;

const RightContainer = styled.div`
    ${
        tw`
            flex
            flex-col
            w-1/2
            relative
            mt-20        
        `
    }
`
const Slogan = styled.h1`
    ${
        tw`
            font-bold
            text-2xl
            xl:text-6xl
            sm:text-3xl
            md:text-5xl
            lg:font-black
            xl:font-extrabold
            text-black
            mb-4
            sm:leading-snug
            lg:leading-normal
            xl:leading-relaxed
        `
    }
`
const Description = styled.p`
    ${
        tw`
            text-sm
            lg:text-sm
            xl:text-lg
            sm:max-h-full
            max-h-12
            text-gray-800
        `
    }
`
const BlobContainer = styled.div`
    width:20em;
    heigth:10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);
    
    img{
        width: 100%;
        height: auto;
        max-height: max-content;
    }
`

const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

`

export function TopSection (){
    return(
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent The Best Quality car's With us!</Slogan>
                <Description>
                    Always choose the best car from our local stores and order it remotely
                    at the best price for you and get the best quality car for as long as you 
                    like.
                </Description>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} />
                </BlobContainer>
                <StandaloneCar>
                    <img src={MclarenCarImg} />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    );
}