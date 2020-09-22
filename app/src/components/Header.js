import React from "react";
import Style from "styled-components";

const Nav = Style.div`
  background-color: #6495ED;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const NavItem = Style.a`
  font-size: 14px;
  font-family: Read;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  box-sizing: boderder-box;
`;

function header() {
  return (
    <React.Fragment>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Contato</NavItem>
        <NavItem>Sobre</NavItem>
      </Nav>
    </React.Fragment>
  );
}

export default header;
