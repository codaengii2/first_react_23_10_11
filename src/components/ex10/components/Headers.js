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
  cursor: pointer;
`;

export const Headers = () => {
  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
      </MoreBtn>
      <MenuBtn>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </MenuBtn>
    </SHeader>
  );
};
