// styles.ts
import styled, { css } from 'styled-components';
import variaveis from '../../styles/variaveis';

export const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${variaveis.sColor};

  span {
    color: ${variaveis.tColor}
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 20px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  margin-left: 1rem;
  color: ${variaveis.sColor};
  
  &:hover {
    color: ${variaveis.tColor}
  }
`;

export const ResponsiveHeaderWrapper = styled.header`
  margin: 4vh auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${variaveis.mainColor};
  @media (max-width: 768px) {
    display: flex;
    position: relative;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${variaveis.sColor};
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 1rem;
  background-color: ${variaveis.sColor};

  ${NavLink} {
    margin-top: 0.5rem;
    background-color: ${variaveis.sColor};
    color: ${variaveis.mainColor};
    text-align: center;
  }

  ${({ theme }) => theme.mobileMenuOpen && css`
    display: flex;
    
  `}
`;

export const CloseIcon = styled.img`
    background-color: ${variaveis.tColor};
    border-radius: 50%;
`