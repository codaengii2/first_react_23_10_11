import {
  faBackward,
  faBars,
  faCaretDown,
  faForward,
  faForwardStep,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

const SCover = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 50px auto;
`;

const Bg = styled.div`
  height: 320px;
  background-color: lightgray;
  border-radius: 20px;
`;

const TitleWrap = styled.div`
  text-align: center;
  margin-top: 30px;
  h3 {
    font-size: 22px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #808080;
    margin-top: 10px;
  }
`;

export const Cover = () => {
  return (
    <SCover>
      <Bg></Bg>
      <TitleWrap>
        <h3>Blue bird</h3>
        <p>Pick Dreams</p>
      </TitleWrap>
    </SCover>
  );
};
