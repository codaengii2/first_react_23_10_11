import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const baseLayoutSize = {
  padding: "150px 15%",
};

export const fontSize = {
  title: "80px",
  menu: "18px",
  desc: "16px", //문단
};

export const colors = {
  darkGray: "#1d1d1d",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
}
body{
    font-family: 'Noto Sans KR', sans-serif;
}
a{
  text-decoration: none;
  color: #1d1d1d;
}
ul,li{
  list-style: none;
}
`;

// => 전체 영역에서 사용할수 있는 스타일 처리법
//npm styled-reset에서 npm i styled-reset 복사 -> 터미널 설치
