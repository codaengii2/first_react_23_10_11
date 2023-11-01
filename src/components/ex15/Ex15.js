import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Sign } from "./pages/Sign";

export const Ex15 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/:id" element={<Login />} />
        {/* <Route path="/sign" element={<Sign />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
