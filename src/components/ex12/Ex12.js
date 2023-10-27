import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Menu01 } from "./pages/Menu01";
import { Menu02 } from "./pages/Menu02";
import { NotFound } from "./pages/NotFound";
export const Ex12 = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu01" element={<Menu01 />} />
          <Route path="/Menu02" element={<Menu02 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
