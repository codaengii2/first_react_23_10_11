import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDown,
  faAngleLeft,
  faAnglesDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { MHeader } from "./MHeader";

const Body = styled.body`
  width: 100%;
  background-color: dimgray;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MBox = styled.header`
  width: 100%;
  max-width: 450px;
  height: 750px;
  background: #333;
  border-radius: 20px;
  padding: 30px;
`;

const Header = styled.header`
  width: 100%;
  height: 40px;
  /* background-color: lightblue; */
  display: flex;
  justify-content: space-between;
`;

const Down = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  font-size: 14px;
  cursor: pointer;
`;
const Menu = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  /* background-color: red; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;
const Section01 = styled.div`
  width: 100%;
  padding: 30px 30px 0;
  /* background-color: red; */
`;
const Img = styled.div`
  width: 100%;
  height: 350px;
  background-color: black;
  border-radius: 30px;
  box-shadow: 5px 5px 5px #090909;
  /* background: url(); */
`;
const Title = styled.div`
  width: 200px;
  height: 100%;
  /* background-color: aliceblue; */
  margin: 25px auto;
  text-align: center;
  padding: 5px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
  }
  p {
    color: #fff;
    font-weight: 300;
  }
`;
const Section02 = styled.div`
  width: 100%;
`;
const MenuBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #9a9a9a;
  border-radius: 5px;
  position: relative;
  div {
    position: absolute;
    width: 10%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: salmon;
    border-radius: 5px;
  }
`;
const Time = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  p {
    font-size: 12px;
    color: #ddd;
  }
`;
const Section03 = styled.div`
  width: 100%;
  /* background-color: aliceblue; */
  padding: 10px;
`;
const MenuControl = styled.div``;
const Footer = styled.div``;
const Current = styled.div``;

export const MusicApp = () => {
  return (
    <div>
      <Body>
        <MBox>
          <MHeader />

          <Section01>
            <Img></Img>
            <Title>
              <h1>Blue bird</h1>
              <p>Pick Dreams</p>
            </Title>
          </Section01>

          <Section02>
            <MenuBar>
              <div></div>
            </MenuBar>
            <Time>
              <p>00:03</p>
              <p>03:42</p>
            </Time>
          </Section02>

          <Section03>
            <MenuControl>
              {/* <FontAwesomeIcon icon={faShuff}></FontAwesomeIcon> */}
            </MenuControl>
          </Section03>

          <Footer>
            <Current></Current>
          </Footer>
        </MBox>
      </Body>
    </div>
  );
};
