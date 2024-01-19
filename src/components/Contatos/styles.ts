import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";


export const Title = styled.h3`
    margin: 10vh 0 4vh ;
    color: ${variaveis.sColor};
    font-size: 28px;
`

export const Contato = styled.section`
    margin: 10vh 0;

    @media (max-width: 768px) {
        text-align: center;
      }
`
export const ContatosList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 8vh 0;
`

export const ContatosItem = styled.li`
    list-style: none;
    text-align: center;
`

export const ContatosImg = styled.a`
    
`

export const ContatoImg = styled.img`
    width: 50px;
`