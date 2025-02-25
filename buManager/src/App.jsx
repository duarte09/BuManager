import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Opinioes from "./components/Opinioes/Opinioes";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Loja from "./pages/Loja/Loja";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import { firebase } from "./firebase.config";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <div>
      <Header navigateTo={navigateTo} />

      {currentPath === "/login" && <Login />}
      {currentPath === "/loja" && <Loja />}
      {currentPath === "/contato" && <Contato />}
      {currentPath === "/sobre" && <Sobre />}
      {currentPath === "/" && (
        <>
          <Home />
          <Opinioes />
        </>
      )}

      {currentPath !== "/login" && <Footer />}
    </div>
  );
};

export default App;
