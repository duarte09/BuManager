import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contato = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 min-h-screen">
      <motion.h1
        className="mt-20 text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contato
      </motion.h1>
      <p className="text-gray-600 text-center max-w-2xl mb-10">
        Entre em contato conosco para saber mais sobre nossos serviços ou tirar
        dúvidas.
      </p>
      <motion.div
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Envie uma mensagem
        </h2>
        <form className="space-y-4">
          <TextInput label="Nome" id="name" placeholder="Seu nome" />
          <TextInput
            label="Email"
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
          />
          <TextArea label="Mensagem" id="message" placeholder="Sua mensagem" />
          <SubmitButton>Enviar</SubmitButton>
        </form>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContactItem
          icon={<FiPhone className="text-blue-600 text-3xl" />}
          label="Telefone"
          value="+55 (11) 1234-5678"
        />
        <ContactItem
          icon={<FiMail className="text-blue-600 text-3xl" />}
          label="Email"
          value="contato@email.com"
        />
        <ContactItem
          icon={<FiMapPin className="text-blue-600 text-5xl" />}
          label="Endereço"
          value="Av. João Naves de Avila, 1234, Uberlândia, MG"
        />

        <div className="flex justify-center items-center space-x-8 w-full col-span-1 sm:col-span-2 lg:col-span-3 mt-4">
          <SocialIcon
            href="https://instagram.com"
            icon={<FaInstagram />}
            color="hover:text-blue-600"
          />
          <SocialIcon
            href="https://facebook.com"
            icon={<FaFacebook />}
            color="hover:text-blue-600"
          />
          <SocialIcon
            href="https://linkedin.com"
            icon={<FaLinkedin />}
            color="hover:text-blue-600"
          />
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl mt-2 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Localização
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </motion.div>
    </div>
  );
};

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
    {icon}
    <p className="ml-4 text-gray-800 font-semibold">
      {label}: <span className="text-gray-600">{value}</span>
    </p>
  </div>
);

const SocialIcon = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-3xl ${color} hover:scale-110 transition-transform duration-200`}
  >
    {icon}
  </a>
);

const TextInput = ({ label, id, type = "text", placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      required
    />
  </div>
);

const TextArea = ({ label, id, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-medium">
      {label}
    </label>
    <textarea
      id={id}
      className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="5"
      placeholder={placeholder}
      required
    ></textarea>
  </div>
);

const SubmitButton = ({ children }) => (
  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
  >
    {children}
  </button>
);

export default Contato;
