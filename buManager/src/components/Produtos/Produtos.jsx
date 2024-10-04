import Body from "../../assets/produtos/Body.png";
import Camiseta from "../../assets/produtos/Camiseta.png";
import Caneca from "../../assets/produtos/Caneca.png";
import Colete from "../../assets/produtos/Colete.png";
import Tirante from "../../assets/produtos/Tirante.png";
import { FaStar } from "react-icons/fa6";

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
        <div>
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
                  <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-10 mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">
            Gostou? Garanta já o seu e fique trajado de Computaria!
          </h1>
          <p className="text-base text-gray-600 mt-4">
            Clique no botão a seguir e veja mais opções de produtos disponíveis
            para venda.
          </p>
          <div className="flex justify-center mt-4">
            <a href="/loja">
              <button className="bg-blue-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:bg-blue-500 transform hover:scale-105">
                Veja mais
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
