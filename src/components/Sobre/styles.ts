import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";

export const Sobre = styled.section`
    margin: 10vh 0;

    @media (max-width: 768px) {
        max-width: 80%;
        margin: 10vh auto;

      }
`

export const SobreContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: block;
        text-align: center;
      }

    img {
        max-width: 50%;
        border-radius: 5%;
        border: 1px solid ${variaveis.tColor};

        @media (max-width: 768px) {
            max-width: 35%;
          }
    }

`