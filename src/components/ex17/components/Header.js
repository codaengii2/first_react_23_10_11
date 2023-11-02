import { Link } from "react-router-dom";
import styled from "styled-components";
const Sheader = styled.header`
  padding: 20px 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 18px;
    font-weight: 500;
  }
`;
export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      </Nav>
    </Sheader>
  );
};
