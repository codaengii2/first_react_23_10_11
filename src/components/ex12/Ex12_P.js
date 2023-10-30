import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages_P/Home";
import { Sub } from "./pages_P/Sub";
// import { Sub02 } from "./pages_P/Sub02";
import { PageNotFound } from "./pages_P/PageNotFound";
import { Header } from "./components_P/Header";

export const Ex12_P = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub/:id" element={<Sub />} />
          {/* <Route path="/sub02" element={<Sub02 />} /> */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
