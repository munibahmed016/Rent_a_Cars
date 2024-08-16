import React from "react";
import CarLogo from "../../../assets/images/car-logo.png";
import styled from "styled-components";
import tw from "twin.macro";


const LogoConatiner = styled.div`
    ${
        tw`
            flex
            items-center
        `
    }
`;

const LogoText = styled.div`
    ${
        tw`
            text-xl
            md:text-2xl
            font-black
            text-black
            m-1
        `
    }
`;

const Image = styled.div`

    width:auto
    ${tw`h-6 md:h-9`};

    img{
        width: auto;
        height:100%
    }
`;

export function Logo (){
    return <LogoConatiner>
        <Image>
            <img src={CarLogo} />
        </Image>
        <LogoText>YourCar.</LogoText>
    </LogoConatiner>
}