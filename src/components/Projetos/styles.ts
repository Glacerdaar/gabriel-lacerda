import { styled } from "styled-components"
import variaveis from "../../styles/variaveis"

export const Projetos = styled.section`
    margin: 10vh 0;

    @media (max-width: 768px) {
      max-width: 90%;
      margin: 10vh auto;
    }
`

export const CardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 768px) {

    } 
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 1px ${variaveis.tColor};
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 30px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`;

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${variaveis.sColor};
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${Card}:hover & {
    transform: rotateX(0deg);
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: $${variaveis.mainColor};
  font-weight: 700;
  background-color: ${variaveis.sColor};
`;

export const CardDescription = styled.p`
  margin: 10px 0 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${variaveis.mainColor};
  line-height: 1.4;
  background-color: ${variaveis.sColor};
`;

export const CardButton = styled.button`
  padding: 15px;
  border-radius: 8px;
  background: black;
  border: none;
  color: ${variaveis.sColor};
  margin-right: 10px;
  cursor: pointer;
`;

// Se houver mais estilos ou componentes, adicione-os conforme necessário.
