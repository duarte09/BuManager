import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

    if (currentPath === '/login') {
      return <Login />;
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
