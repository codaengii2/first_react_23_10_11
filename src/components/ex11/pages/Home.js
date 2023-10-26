import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <div>
      <PageTitle name={"Home"} />
      <h3>HOME</h3>
    </div>
  );
};

// *Router
// => 경로 설정
// ex)
// <BrowserRouter>(라우터 설정, 브라우저 라우터, 해시 라우터가 있음)
//     <Routes>
//         <Route path="경로1" element={컴포넌트1} /> (각각 라우터 설정)
//         <Route path="경로2" element={컴포넌트2} />
//         <Route path="/*" element={404에러 페이지 컴포넌트} />
//     </Routes>
// </BrowserRouter>

// => 링크를 사용할 땐 a 태그가 아닌 Link 컴포넌트를 사용함
//   ex)
//   <Link to={"경로"}></Link>
