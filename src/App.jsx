import Menu from "./components/Menu";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Myfooter from "./components/Myfooter";
import Politica from "./pages/Politica";
import NovaTarefa from "./pages/NovaTarefa";
import EditarTarefa from "./pages/EditarTarefa";
import Tarefas from "./pages/Tarefas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";
import Loader from "./components/Loader";

function App() {
  // O estado de usuario indica se ele está logado ou não na aplicação
  // Se estiver null é por que le não esta logado, se tiver algo dentro do estado é por que ele esta logado
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Monitora / detecta o usuário conectado
    // auth pega os dados e guarda em user e então user envia para setUsuarioLogado
    onAuthStateChanged(auth, (user) => {
      // user é nulo -> usuário deslogou
      // se tem objeto - usuário logou
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);

  // Esse if corrige o bug do F5 que fazia voltar para tela de login mesmo ja estando logado
  if (loading) {
    return <Loader />;
  }

  // Usuario.Provider é o elemento que irá compartilhar um valor/dado para os componentes filhos da aplicação
  // Context é comumente usado para aplicar tema dark e o gerenciamento de rotas logado ou deslogado
  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Myfooter />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/politicadeprivacidade" element={<Politica />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </UsuarioContext.Provider>
    </>
  );
}

export default App;
