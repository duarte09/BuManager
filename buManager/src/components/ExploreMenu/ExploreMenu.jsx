import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiX } from "react-icons/fi";

const menu_list = [
  {
    menu_name: "Kits Anteriores",
    menu_image: "/src/assets/loja/kits-icon.png",
  },
  {
    menu_name: "Lanches",
    menu_image: "/src/assets/loja/snacks-icon.png",
  },
  {
    menu_name: "Bebidas",
    menu_image: "/src/assets/loja/drink-icon.png",
  },
  {
    menu_name: "Tabacaria",
    menu_image: "/src/assets/loja/tabacaria.png",
  },
];

const productData = {
  "Kits Anteriores": [
    {
      id: 1,
      titulo: "Colete",
      color: "Vermelho",
      img: "/src/assets/produtos/Colete.png",
      price: 45.0,
    },
    {
      id: 2,
      titulo: "Body",
      color: "Azul",
      img: "/src/assets/produtos/Body.png",
      price: 60.0,
    },
    {
      id: 3,
      titulo: "Camiseta",
      color: "Azul",
      img: "/src/assets/produtos/Camiseta.png",
      price: 55.0,
    },
    {
      id: 4,
      titulo: "Caneca",
      color: "Azul",
      img: "/src/assets/produtos/Caneca.png",
      price: 30.0,
    },
    {
      id: 5,
      titulo: "Tirante",
      color: "Azul",
      img: "/src/assets/produtos/Tirante.png",
      price: 15.0,
    },
    {
      id: 6,
      titulo: "Calça",
      color: "Azul",
      img: "/src/assets/produtos/Calca.png",
      price: 100.0,
    },
    {
      id: 7,
      titulo: "Boné",
      color: "Azul",
      img: "/src/assets/produtos/Bone.png",
      price: 40.0,
    },
    {
      id: 8,
      titulo: "Corta-Vento",
      color: "Azul",
      img: "/src/assets/produtos/Cortavento.png",
      price: 150.0,
    },
    {
      id: 9,
      titulo: "Samba Masculino",
      color: "Azul",
      img: "/src/assets/produtos/SambaMasculino.png",
      price: 40.0,
    },
    {
      id: 10,
      titulo: "Samba Feminino",
      color: "Azul",
      img: "/src/assets/produtos/SambaFeminino.png",
      price: 40.0,
    },
  ],
  Lanches: [
    {
      id: 11,
      titulo: "Sanduíche natural",
      color: "Misto",
      img: "/src/assets/produtos/sanduiche.jpg",
      price: 15.0,
    },
    {
      id: 12,
      titulo: "Ruffles",
      color: "Tradicional",
      img: "/src/assets/produtos/ruffles.jpg",
      price: 10.0,
    },
    {
      id: 13,
      titulo: "Lays",
      color: "Tradicional",
      img: "/src/assets/produtos/lays.jpg",
      price: 10.0,
    },
    {
      id: 14,
      titulo: "Trakinas",
      color: "Chocolate",
      img: "/src/assets/produtos/trakinas.jpg",
      price: 7.0,
    },
    {
      id: 15,
      titulo: "Torcida",
      color: "Pimenta",
      img: "/src/assets/produtos/torcida.jpg",
      price: 7.0,
    },
    {
      id: 16,
      titulo: "Amendoim",
      color: "Japonês",
      img: "/src/assets/produtos/amendoim.jpg",
      price: 5.0,
    },
    {
      id: 17,
      titulo: "Pipoca de microondas",
      color: "Temperada",
      img: "/src/assets/produtos/pipoca.jpg",
      price: 5.0,
    },
    {
      id: 18,
      titulo: "Trident",
      color: "Menta",
      img: "/src/assets/produtos/trident.jpg",
      price: 2.99,
    },
    {
      id: 19,
      titulo: "Halls",
      color: "Black",
      img: "/src/assets/produtos/halls.jpg",
      price: 2.99,
    },
    {
      id: 20,
      titulo: "Ouro Branco",
      color: "Chocolate Branco",
      img: "/src/assets/produtos/chocolate.jpg",
      price: 1.99,
    },
  ],
  Bebidas: [
    {
      id: 21,
      titulo: "Refrigerante",
      color: "Coca-Cola",
      img: "/src/assets/produtos/refrigerante.jpg",
      price: 6.0,
    },
    {
      id: 22,
      titulo: "Suco Del-Valle",
      color: "Laranja",
      img: "/src/assets/produtos/suco.jpg",
      price: 4.0,
    },
    {
      id: 23,
      titulo: "Energético Monster",
      color: "Tradicional",
      img: "/src/assets/produtos/energetico.jpg",
      price: 10.0,
    },
    {
      id: 24,
      titulo: "Água",
      color: "Com gás",
      img: "/src/assets/produtos/aguagas.jpg",
      price: 2.5,
    },
    {
      id: 25,
      titulo: "Água",
      color: "Sem gás",
      img: "/src/assets/produtos/agua.jpg",
      price: 2.0,
    },
    {
      id: 26,
      titulo: "Café",
      color: "Café preto",
      img: "/src/assets/produtos/cafe.jpg",
      price: 3.0,
    },
  ],
  Tabacaria: [
    {
      id: 27,
      titulo: "Cigarro",
      color: "Unidade",
      img: "/src/assets/produtos/cigarro.jpg",
      price: 2.99,
    },
    {
      id: 28,
      titulo: "Cigarro de palha",
      color: "Tradicional",
      img: "/src/assets/produtos/palha.jpg",
      price: 1.99,
    },
    {
      id: 29,
      titulo: "Seda",
      color: "Unidade",
      img: "/src/assets/produtos/seda.jpg",
      price: 1.0,
    },
    {
      id: 30,
      titulo: "Piteira",
      color: "Unidade",
      img: "/src/assets/produtos/piteira.jpg",
      price: 1.1,
    },
  ],
};

const MenuList = ({ category, setCategory }) => {
  return (
    <div className="flex justify-center items-center gap-5 text-center my-5 overflow-x-auto w-full py-3">
      {menu_list.map((item, index) => (
        <div
          onClick={() =>
            setCategory((prev) =>
              prev === item.menu_name ? "All" : item.menu_name
            )
          }
          key={index}
          className={`flex flex-col items-center min-w-[150px] cursor-pointer bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 ${
            category === item.menu_name
              ? "border-2 border-blue-500"
              : "border border-transparent"
          }`}
        >
          <img
            src={item.menu_image}
            alt={item.menu_name}
            className={`w-24 h-24 object-cover rounded-full mb-3 ${
              category === item.menu_name ? "ring-2 ring-blue-500" : ""
            }`}
          />
          <p
            className={`text-neutral-800 font-medium ${
              category === item.menu_name ? "text-blue-500 font-bold" : ""
            }`}
          >
            {item.menu_name}
          </p>
        </div>
      ))}
    </div>
  );
};

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveFromCart,
  onUpdateQuantity,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const totalValue = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      className={`fixed right-0 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50 ${
        isMinimized ? "w-16" : "w-80"
      } overflow-hidden`}
    >
      <div className="relative h-full">
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className={`absolute top-4 mt-2 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg transition-transform hover:bg-blue-600 ${
            isMinimized ? "rotate-180" : ""
          }`}
        >
          {isMinimized ? <FiArrowRight size={20} /> : <FiArrowLeft size={20} />}
        </button>

        <div className={`p-6 ${isMinimized ? "hidden" : "block"}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="ml-10 text-2xl font-bold text-gray-800">Carrinho</h2>
            <button
              onClick={onClose}
              className="text-red-500 hover:bg-red-100 p-2 rounded-full"
            >
              <FiX size={20} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">
              Seu carrinho está vazio.
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border-b pb-4 border-gray-200"
                >
                  <img
                    src={item.img}
                    alt={item.titulo}
                    className="h-16 w-16 object-cover rounded-lg shadow-sm"
                  />
                  <div className="ml-4 flex-grow">
                    <p className="text-lg font-semibold text-gray-700">
                      {item.titulo}
                    </p>
                    <p className="text-gray-500">
                      R$ {item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="text-gray-700 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="text-gray-700 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="ml-4 text-red-500 hover:bg-red-100 p-1 rounded-full"
                      >
                        <FiX size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800">
                Total: R$ {totalValue.toFixed(2)}
              </p>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all">
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleConfirm = () => {
    setIsConfirmed(true);
    onAddToCart({ ...product, quantity });
    setTimeout(() => setIsConfirmed(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 hover:scale-105">
      <img
        src={product.img}
        alt={product.titulo}
        className="h-48 w-full object-cover rounded-md mb-4"
      />
      <div className="text-center">
        <h3 className="font-semibold text-lg text-gray-800">
          {product.titulo}
        </h3>
        <p className="text-sm text-gray-500">{product.color}</p>
        <p className="text-lg text-gray-900">R$ {product.price.toFixed(2)}</p>
        <button
          onClick={() => setSelectedProductId(product.id)}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 transition-colors duration-200 hover:bg-blue-700"
        >
          Adicionar ao Carrinho
        </button>

        {selectedProductId === product.id && (
          <div className="mt-4">
            {[
              "Camiseta",
              "Colete",
              "Calça",
              "Body",
              "Corta-Vento",
              "Samba Masculino",
              "Samba Feminino",
            ].includes(product.titulo) && (
              <div>
                <label className="block text-gray-700 font-medium">
                  Selecione o tamanho:
                </label>
                <select
                  value={size}
                  onChange={handleSizeChange}
                  className="mt-2 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
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
            )}
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">
                Quantidade:
              </label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="mt-2 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
                min="1"
              />
            </div>
            <button
              onClick={handleConfirm}
              className="bg-green-600 text-white rounded-lg px-4 py-2 mt-4 transition-colors duration-200 hover:bg-green-700"
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
  );
};

const ExploreMenu = () => {
  const [category, setCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      handleUpdateQuantity(
        product.id,
        existingItem.quantity + product.quantity
      );
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const loadProducts = () => {
    const products =
      category === "All"
        ? Object.values(productData).flat()
        : productData[category] || [];
    return products;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 relative">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4">
        Bem-vindo à nossa loja!
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium text-neutral-800 mb-6 px-4 max-w-2xl leading-relaxed">
        Explore nossas opções disponíveis!
      </h2>

      <MenuList category={category} setCategory={setCategory} />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {loadProducts().map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
