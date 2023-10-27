import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 100px;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
`;

const Logo = styled.div``;

const Menu01 = styled.div``;

const Menu02 = styled.div``;

export const Header = () => {
  return (
    <SHeader>
      <Container>
        <Logo>
          <Link to={"/"}>
            <h1>LOGO</h1>
          </Link>
        </Logo>
        <Menu01>
          <Link to={"/menu01"}>
            <h1>Menu01</h1>
          </Link>
        </Menu01>
        <Menu02>
          <Link to={"/menu02"}>
            <h1>Menu02</h1>
          </Link>
        </Menu02>
      </Container>
    </SHeader>
  );
};
