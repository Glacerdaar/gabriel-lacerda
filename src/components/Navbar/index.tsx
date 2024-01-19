import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Logo,
  Nav,
  NavLink,
  ResponsiveHeaderWrapper,
  HamburgerIcon,
  MobileMenu,
  CloseIcon,
} from './styles';

import closeIcon from "../../assets/Navbar/closeIcon.png"
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSectionAndToggleMenu = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMobileMenu();
    }
  };

  return (
    <ThemeProvider theme={{ mobileMenuOpen: isMobileMenuOpen }}>
      <ResponsiveHeaderWrapper>
        <Logo><span>&#60;</span>Gabriel.Lacerda<span>&#62;</span></Logo>
        <Nav>
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#projetos">Projetos</NavLink>
          <NavLink href="#conhecimentos">Conhecimentos</NavLink>
          <NavLink href="#contato">Contatos</NavLink>
        </Nav>
        <HamburgerIcon onClick={toggleMobileMenu}>&#9776;</HamburgerIcon>
        {isMobileMenuOpen && (
          <MobileMenu>
            <NavLink onClick={() => scrollToSectionAndToggleMenu('sobre')}>
              Sobre
            </NavLink>
            <NavLink onClick={() => scrollToSectionAndToggleMenu('projetos')}>
              Projetos
            </NavLink>
            <NavLink onClick={() => scrollToSectionAndToggleMenu('conhecimentos')}>
              Conhecimentos
            </NavLink>
            <NavLink onClick={() => scrollToSectionAndToggleMenu('contato')}>
              Contatos
            </NavLink>
            <NavLink onClick={toggleMobileMenu}>
              <CloseIcon src={closeIcon} alt="Close icon" />
            </NavLink>
          </MobileMenu>
        )}
      </ResponsiveHeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
