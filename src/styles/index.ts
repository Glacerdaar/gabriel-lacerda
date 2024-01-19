import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${variaveis.mainFont};
        text-decoration: none;
        list-style: none;
        background-color: ${variaveis.mainColor};
        
    }
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`

export const Text = styled.p`
    color: ${variaveis.sColor};
    font-size: 20px;
    line-height: 3.2vh;
    margin-left: 30px;

    @media (max-width: 768px) {
        font-size: 16px;
        margin: 20px;
    }
`

export const Title = styled.h3`
    margin-bottom: 32px;
    color: ${variaveis.sColor};
    font-size: 28px;
`


export default GlobalStyle