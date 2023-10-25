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

const SBtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 50px 0;

  li:nth-child(3) {
    width: 60px;
    height: 60px;
    background-color: coral;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
  }
`;

export const BtnWrap = () => {
  return (
    <SBtnWrap>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>
      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faPause} />
      </li>
      <li>
        <FontAwesomeIcon icon={faForward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faRepeat} />
      </li>
    </SBtnWrap>
  );
};
