import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";


export const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10vh 0;

    @media (max-width: 768px) {
        max-width: 80%;
        display: block;
        text-align:center;
        margin: 10vh auto;
      }
` 


export const TextHero = styled.div`
    color: ${variaveis.sColor};

    p {
        font-size: 22px;

        @media (max-width: 768px) {
            font-size: 16px;
          }
    }

    h3 {
        font-size: 52px;

        @media (max-width: 768px) {
            font-size: 32px;
          }
    }

    span {
        color: #279AF1;
    }
`

export const LinkHero = styled.div`
    margin-top: 32px
`

export const HeroLinks = styled.a`
    padding: 12px 24px;
    background-color: ${variaveis.sColor};
    border-radius: 16px;
    margin-right: 16px;
    color: ${variaveis.tColor};
    font-weight: 700;
`

export const HeroImg = styled.img`
    width: 90%;
    top: 5%;
    left: 26%; 

    @media (max-width: 768px) {
        display: none;
      }
`