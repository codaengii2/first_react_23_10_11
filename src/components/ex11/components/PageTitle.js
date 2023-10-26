import { Helmet } from "react-helmet";

export const PageTitle = ({ name }) => {
  return (
    <Helmet>
      <title>{name}</title>
    </Helmet>
    // => 각 페이지 타이틀 정의
  );
};

// *Router
// => 확장

// react router dom 검색 => npm i react-router-dom 설치

// component

// BrowserRouter
// path = "/"
// site 명 / -> Home
// path = "/sub01"
// site 명 / sub01 -> Sub01
// HashRouter => 배포용
// site 명 / -> Home
// site 명 / # / sub01 -> Sub01

// http status

// 적은 것 이외에 는 404not Found
// path = "/*"

// Home에서 네비게이션 버튼을 만들 때 a 태그 사용 x
// Link to = {}를 사용하여  "/.." 경로기입

// 홈페이지를 만들 때 타이틀은 중요!
// 검색시 검색사이트에 등록을 해야하는데
// seo (robat)가 코드를 읽고 타이틀을 띄워줌
// 페이지마다 타이틀 설정하는 법

// 잘못 설치한거 삭제할 때
// install  = i
// 대신
// uninstall
