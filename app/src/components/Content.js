import React from "react";
import Style from "styled-components";

const Content = Style.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContextText = Style.p`
  color: #000;
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
  font-family: "Read";
`;

function content() {
  return (
    <React.Fragment>
      <Content>
        <ContextText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nisl tellus, hendrerit ut fermentum id, interdum ac massa. Integer in
          nisi gravida, vulputate diam nec, fringilla ante. Sed enim nunc,
          sollicitudin ac ipsum volutpat, pharetra porttitor felis. Fusce semper
          fermentum leo et hendrerit. Mauris diam lacus, convallis eu sem vitae,
          laoreet gravida purus. Fusce eu vulputate diam, finibus efficitur
          nulla. Vivamus quis nisl nec lacus viverra efficitur ac non eros.
        </ContextText>
        <ContextText>
          Proin lorem elit, vulputate et faucibus id, efficitur quis nulla.
          Nulla viverra placerat felis sed faucibus. Donec leo tellus, mollis
          nec rhoncus eu, ultrices vitae libero. Suspendisse gravida ex purus,
          sit amet efficitur tellus viverra id. Nulla rutrum est cursus est
          ultrices convallis at eu odio. Vestibulum rhoncus lacus ex, et
          vulputate erat porta sed. Morbi efficitur consectetur magna, id
          ullamcorper massa convallis non. Vivamus lobortis commodo turpis vel
          hendrerit. Aliquam ut hendrerit dui, in sagittis ante. Etiam at felis
          sed mauris eleifend mattis id in sem. Mauris volutpat, enim vel
          pharetra mattis, augue sem tristique ipsum, vitae luctus lacus augue
          at tellus. Integer quis nibh in massa pretium fringilla vitae a
          tellus. Aliquam efficitur rutrum ex, eget finibus lectus iaculis
          vitae. Fusce lacus libero, ullamcorper non ex nec, consequat rhoncus
          arcu. Cras sit amet mollis sem.
        </ContextText>
        <ContextText>
          Nulla lacinia ipsum sapien, vel rhoncus erat fringilla eu. Ut suscipit
          sollicitudin accumsan. Suspendisse tortor est, hendrerit nec nisl
          vitae, euismod porttitor urna. Fusce justo nulla, pellentesque at odio
          in, convallis iaculis nibh. Maecenas eu mi pulvinar, semper tellus in,
          interdum tellus. Vestibulum a gravida lacus. Morbi nec dui enim.
          Integer placerat nisi turpis, tincidunt rhoncus orci gravida sed.
          Proin maximus quam sed urna convallis facilisis. Morbi varius pretium
          tortor, vitae consectetur libero suscipit a. Etiam commodo scelerisque
          vehicula. Phasellus eu viverra lectus, nec dapibus risus.
        </ContextText>
        <ContextText>
          Morbi venenatis congue finibus. Donec eros odio, lobortis eget leo et,
          finibus tincidunt diam. Nunc id lacus quis metus mollis ultricies.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur mattis sem quam, non rutrum tellus
          eleifend vel. Praesent a varius eros. Etiam ut nisl semper, maximus
          turpis vel, pretium quam. Phasellus vel dui mi. Etiam risus neque,
          consectetur non semper sit amet, lacinia ut magna. Vivamus sagittis
          luctus dui, sed scelerisque metus consequat eget. Aenean dui dui,
          finibus a erat ut, volutpat aliquam quam. Duis vitae massa tellus. Nam
          auctor ut nisl eu gravida. Sed vestibulum turpis nec libero congue
          consequat. Proin enim mauris, malesuada faucibus convallis a,
          malesuada non enim. Nulla quis bibendum augue, vel dignissim arcu.
        </ContextText>
        <ContextText>
          Donec nec elementum elit, quis mollis nisi. Curabitur convallis
          sodales bibendum. Quisque ante tortor, feugiat vel lacinia
          scelerisque, congue quis odio. Curabitur nec nibh ut leo ullamcorper
          eleifend. Nam hendrerit sollicitudin nisl cursus auctor. Suspendisse
          mattis orci ac massa facilisis sollicitudin. Sed mi nulla, bibendum
          eget consectetur vitae, placerat at dui. Quisque sagittis orci in
          ultricies lobortis. Sed nulla quam, egestas ut consequat at, gravida
          in diam. Sed ac justo purus. Nulla pellentesque efficitur mi, quis
          cursus ante dapibus sed.
        </ContextText>
      </Content>
    </React.Fragment>
  );
}

export default content;
