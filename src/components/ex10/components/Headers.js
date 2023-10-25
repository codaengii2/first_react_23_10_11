import {
  faBackward,
  faBars,
  faCaretDown,
  faForward,
  faForwardStep,
  faLeftLong,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { useState } from "react";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;

const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
  position: relative;
  z-index: 10;
  cursor: pointer;
`;

const MenuWrap = styled.ul`
  position: absolute;
  top: 0;
  left: ${(props) => props.$isActive};
  width: 100%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60% 0;
  font-size: 30px;
  font-weight: 600;
  color: ${colors.darkGray};
  transition: 0.5s;
`;

export const Headers = () => {
  // const [num, setNum] = useState(true);
  const [leftResult, setLeftResult] = useState("100%");
  const onClickMenu = () => {
    // if (num === 0) {
    //   setLeftResult("100%");
    //   setNum(num + 1);
    // } else if (num === 1) {
    //   setLeftResult("0");
    //   setNum(num - 1);
    // }

    // num === true ? setLeftResult(0) : setLeftResult("100%");
    leftResult === "100%" ? setLeftResult(0) : setLeftResult("100%");
  };
  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
      </MoreBtn>
      <MenuBtn onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </MenuBtn>

      <MenuWrap $isActive={leftResult}>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
      </MenuWrap>
    </SHeader>
  );
};
