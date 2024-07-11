import Menu from "./components/Menu";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myfooter from "./components/Myfooter";
import Politica from "./pages/Politica";
import NovaTarefa from "./pages/NovaTarefa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Myfooter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/politicadeprivacidade" element={<Politica />} />
          <Route path="/novatarefa" element={<NovaTarefa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
