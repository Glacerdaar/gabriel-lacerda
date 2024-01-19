import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Skill = styled.section`
    margin: auto;


    @media (max-width: 768px) {
        max-width: 80%;
        display: block;
      }
`

export const SkillContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
        display: block;
      }
`

export const Text = styled.p`
    font-size: 16px;
    font-family: var(--font-roboto);
    color: ${variaveis.sColor}; 

    @media (max-width: 768px) {
        display: none;
      }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 5px 5px;
    border: 1px solid ${variaveis.tColor};
    border-radius: 20px;
    text-align: center;
    margin-bottom: 10vh;
    margin-left: 10vh;

    @media (max-width: 768px) {
        margin: auto;
      }
`

export const SkillCard = styled.article`
    margin: 20px 20px;
    cursor: pointer;
    border-radius: 20px;
    justify-content: center;
`

export const SkillCardImage = styled.img`
    max-width: 60px;  
    height: 60px;   
    background-color: transparent;
`