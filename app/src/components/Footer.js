import React from "react";
import Style from "styled-components";

const Footer = Style.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6495ED;
`;

const TextFooter = Style.span`
  text-decoration: none;
  font-family: Read;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

function footer() {
  return (
    <React.Fragment>
      <Footer>
        <TextFooter>Exemplo de ReactJS com Styled Components</TextFooter>
      </Footer>
    </React.Fragment>
  );
}

export default footer;
