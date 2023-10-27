import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 600px;
  background-image: url(${(props) => props.$mainbg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Main = () => {
  return (
    <Div $mainbg="https://png.pngtree.com/background/20220723/original/pngtree-background-biru-keren-dan-kosong-abstract-untuk-template-desain-powerpoint-ppt-picture-image_1738466.jpg"></Div>
  );
};
