import { useState } from "react";
import Body from "../../assets/produtos/Body.png";
import Camiseta from "../../assets/produtos/Camiseta.png";
import Caneca from "../../assets/produtos/Caneca.png";
import Colete from "../../assets/produtos/Colete.png";
import Tirante from "../../assets/produtos/Tirante.png";
import cafeImg from "../../assets/produtos/cafeImg.png";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const floating = {
  rest: { y: 0 },
  hover: {
    y: -20,
    transition: { yoyo: Infinity, duration: 1.5, ease: "easeInOut" },
  },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const DadosProduto = [
  {
    id: 1,
    img: Body,
    titulo: "Body",
    rating: 4.8,
    color: "Azul",
    aosDelay: "400",
  },
  {
    id: 2,
    img: Camiseta,
    titulo: "Camiseta",
    rating: 5.0,
    color: "Azul",
    aosDelay: "400",
  },
  {
    id: 3,
    img: Caneca,
    titulo: "Caneca",
    rating: 4.7,
    color: "Azul",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Colete,
    titulo: "Colete",
    rating: 4.9,
    color: "Azul",
    aosDelay: "400",
  },
  {
    id: 5,
    img: Tirante,
    titulo: "Tirante",
    rating: 4.6,
    color: "Azul",
    aosDelay: "400",
  },
];

const Produtos = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleAddToCart = (produtoId) => {
    setSelectedProductId(produtoId);
    setIsConfirmed(false);
  };

  const handleSizeChange = (event) => setSize(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);

  const handleConfirm = () => {
    if (size && quantity > 0) {
      setIsConfirmed(true);
      alert(
        `Produto adicionado ao carrinho! Tamanho: ${size}, Quantidade: ${quantity}`
      );
    } else {
      alert("Por favor, selecione o tamanho e a quantidade.");
    }
  };

  return (
    <div className="mt-14 mb-12 bg-gray-50 py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-blue-500 text-2xl font-bold">
            Produtos populares da Bateria Computaria
          </p>
          <h1 className="text-4xl font-bold text-gray-800">Kit 2024</h1>
          <p className="text-base text-gray-600 mt-4">
            A seguir, os produtos que a Bateria Computaria tem à venda e em
            destaque. Aproveite e veja a avaliação feita por quem já adquiriu os
            itens!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {DadosProduto.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 hover:scale-105"
            >
              <img
                src={produto.img}
                alt={produto.titulo}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {produto.titulo}
                </h3>
                <p className="text-sm text-gray-500">{produto.color}</p>
                <p className="text-sm text-green-500">Em estoque</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {produto.rating}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(produto.id)}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
                >
                  Adicionar ao Carrinho
                </button>

                {selectedProductId === produto.id && (
                  <div className="mt-4">
                    <div>
                      <label className="block text-gray-700">
                        Selecione o tamanho:
                      </label>
                      <select
                        value={size}
                        onChange={handleSizeChange}
                        className="mt-2 block w-full p-2 border rounded-lg"
                      >
                        <option value="">Selecione</option>
                        <option value="PP">PP</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="XG">XG</option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <label className="block text-gray-700">Quantidade:</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="mt-2 block w-full p-2 border rounded-lg"
                        min="1"
                      />
                    </div>
                    <button
                      onClick={handleConfirm}
                      className="bg-green-500 text-white rounded-lg px-4 py-2 mt-4"
                    >
                      Confirmar
                    </button>
                    {isConfirmed && (
                      <p className="text-green-600 mt-2">
                        Produto adicionado ao carrinho!
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 py-6 px-4 rounded-md shadow-md mt-12">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Garanta já o seu!
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Veja nossas opções de produtos e complete seu look Computaria.
            </p>
            <a href="/loja" className="inline-block w-full">
              <button className="bg-blue-500 text-white font-medium w-full py-3 rounded-md hover:bg-blue-600 transition-colors">
                Confira mais produtos
              </button>
            </a>
          </div>
        </div>

        <div className="container mt-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 shadow-xl overflow-hidden relative"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div className="p-6 sm:p-8 z-10" variants={fadeInUp}>
              <p className="text-lg text-yellow-300 font-bold">
                Dica de ouro...
              </p>
              <h1 className="uppercase text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
                Bateu a fome?
              </h1>
              <p className="text-lg font-medium mb-4">
                Ou ficou com sono e precisa de um UP?
              </p>
            </motion.div>

            <motion.div
              className="h-full flex items-center justify-center relative"
            >
              <motion.img
                src={cafeImg}
                alt="cafe"
                className="absolute scale-150 w-[300px] md:w-[400px] -translate-y-10 drop-shadow-2xl object-cover"
                variants={floating}
                animate="animate"
              />
            </motion.div>

            <motion.div
              className="flex flex-col justify-center gap-6 p-6 sm:p-8 z-10"
              variants={fadeInUp}
            >
              <p className="font-bold text-2xl">
                A geladeira da Computaria te salva!
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Snacks e bebidas no melhor preço
              </p>
              <p className="text-base tracking-wide leading-6">
                Pagamentos apenas via PIX.
              </p>

              <motion.button
                className="bg-yellow-400 text-blue-900 font-semibold rounded-lg px-6 py-3 mt-4 shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: "#FCD34D" }}
                transition={{ duration: 0.3 }}
              >
                Compre agora
              </motion.button>
            </motion.div>

            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500 rounded-full blur-2xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
