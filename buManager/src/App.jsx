import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Loja from './pages/Loja/Loja';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

    if (currentPath === '/login') {
      return <Login />;
    }

    if (currentPath === '/loja') {
      return (
        <div>
          <Header navigateTo={navigateTo} />
          <Loja />
          <Footer />
        </div>
      );
    }

  return (
    <div>
      <Header navigateTo={navigateTo} />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
