import React from "react";
import styled from "@emotion/styled";
import { Text } from "./components/Text";
import { Header } from "./components/Header";
import Window from "./components/Window";
import SizedBox from "./components/SizedBox";
import background1 from "./assets/images/4.png";
import { Column, Row } from "./components/Flex";
import { Tag } from "./components/Tag";
import Rectangle from "./components/rectangle";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 100%;
  min-width: 1440px;
  min-height: 100vh;
  padding-bottom: 0;
  justify-content: flex-start;
  flex-shrink: 0;

  // border: 10px solid #574ef1;
  border: 10px solid #ce4c6c;
  background: rgba(87, 78, 241, 0.2);
`;

const Body = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  max-height: 1024px;
  height: 100%;
  padding: 18px;
  flex: 1;
  box-sizing: border-box;
`;

function App() {
  return (
    <Root>
      <Header>
        <Text>Jeremy Paton</Text>
      </Header>
      <Body style={{ flexDirection: "column" }}>
        <Row
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "100px",
          }}
          mainAxisSize="stretch"
          crossAxisSize="max"
        >
          <Window
            style={{
              width: "500px",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Animation</Text>
          </Window>
          <div>
            <Rectangle /> {/* Используем компонент Rectangle здесь */}
          </div>
        </Row>
        <Row
          style={{ justifyContent: "center", alignItems: "center" }}
          mainAxisSize="stretch"
          crossAxisSize="max"
        >
          <Window style={{ width: "265px", height: "360px" }}>
            <Text>Beauty</Text>
          </Window>
          <Window style={{ width: "265px", height: "360px" }}>
            <Text>Beauty</Text>
          </Window>
          <Window style={{ width: "265px", height: "360px" }}>
            <Text>Beauty</Text>
          </Window>
          <Window style={{ width: "265px", height: "360px" }}>
            <Text>Beauty</Text>
          </Window>
          <Window style={{ width: "265px", height: "360px" }}>
            <Text>Beauty</Text>
          </Window>
        </Row>

        {/* <SizedBox width={22}/>
                <Column style={{width: 187, height: 904}} justifyContent="center" alignItems="center">
                    <Window title="Talk to me about" style={{width: 904, transform: 'rotate(-90deg)'}}
                            bodyStyle={{flexDirection: 'row'}}>
                        <Tag>Visual design</Tag>
                        <Tag>Design systems</Tag>
                        <Tag>Figma</Tag>
                    </Window>
                </Column>
                <SizedBox width={22}/>
                <Column style={{flex: 1}}>
                    <Window title="Where’s home?">
                        <Text>where i have community</Text>
                    </Window>
                    <SizedBox height={22}/>
                    <Window title="Secret power">
                        <Text>I can beat you in a game of knock out :)</Text>
                    </Window>
                    <SizedBox height={22}/>
                    <Window title="I’m learning...">
                        <Tag>To tell better stories</Tag>
                        <SizedBox height={16}/>
                        <Tag>Hardware prototyping</Tag>
                        <SizedBox height={16}/>
                        <Tag>Writing better frontend</Tag>
                        <SizedBox height={16}/>
                        <Tag>How to write clearly</Tag>
                    </Window>

                </Column> */}
      </Body>
    </Root>
  );
}

export default App;
