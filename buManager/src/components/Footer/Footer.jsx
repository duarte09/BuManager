import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="shadow-md w-full fixed bottom-0 left-0 bg-neutral-800">
      <div className="max-w-screen-xl mx-auto py-6 px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-4">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <div className="text-white flex flex-col items-center md:items-center">
            <p className="mb-2 text-sm text-center">Fale conosco</p>
            <form className="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="Seu e-mail"
                className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 md:mb-0 md:mr-2"
              />
              <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-4">
          <span>
            &copy; {new Date().getFullYear()} BuManager. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
