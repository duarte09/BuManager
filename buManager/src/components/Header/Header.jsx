import { useState, useEffect } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Controle do dropdown de perfil

  const loggedInLinks = [
    { name: "INÍCIO", link: "/" },
    { name: "SERVIÇOS", link: "/serviços" },
    { name: "LOJA", link: "/loja" },
  ];

  const loggedOutLinks = [
    { name: "INÍCIO", link: "/" },
    { name: "SOBRE NÓS", link: "/sobre" },
    { name: "CONTATO", link: "/contato" },
    { name: "LOJA", link: "/loja" },
  ];

  const Links = isLoggedIn ? loggedInLinks : loggedOutLinks;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-[9999]">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* LOGO */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BookOpenIcon className="w-7 h-7 text-blue-600" />
          <span>BuManager</span>
        </div>

        {/* ICONES MOBILE */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-7 font-semibold hover:text-blue-500"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:underline duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {!isLoggedIn && (
            <a href="/login">
              <button className="btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white md:ml-8 font-semibold px-3 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                Faça login ou registre-se
              </button>
            </a>
          )}
        </ul>

        {/* SEÇÃO DE PERFIL */}
        {isLoggedIn && (
          <div className="relative md:ml-8 profile-dropdown">
            <button
              className="btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-3 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              Perfil
            </button>

            {/* Dropdown de perfil com animação e blur */}
            <ul
              className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg backdrop-blur-md transform transition-all duration-300 ease-in-out 
                            ${
                              showProfileMenu
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                            }`}
            >
              <li>
                <a
                  href="/editar-perfil"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                >
                  Editar Perfil
                </a>
              </li>
              <li>
                <a
                  href="/configuracoes"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                >
                  Configurações
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                >
                  Deslogar
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
