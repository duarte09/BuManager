import { useState } from "react";

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
    { id: 1, titulo: "Colete", color: "Vermelho", img: "/src/assets/produtos/Colete.png", price: 45.00},
    { id: 2, titulo: "Body", color: "Azul", img: "/src/assets/produtos/Body.png", price: 60.00 },
    { id: 3, titulo: "Camiseta", color: "Azul", img: "/src/assets/produtos/Camiseta.png", price: 55.00 },
    { id: 4, titulo: "Caneca", color: "Azul", img: "/src/assets/produtos/Caneca.png", price: 30.00 },
    { id: 5, titulo: "Tirante", color: "Azul", img: "/src/assets/produtos/Tirante.png", price: 15.00 },
    { id: 6, titulo: "Calça", color: "Azul", img: "/src/assets/produtos/Calca.png", price: 100.00 },
    { id: 7, titulo: "Boné", color: "Azul", img: "/src/assets/produtos/Bone.png", price: 40.00 },
    { id: 8, titulo: "Corta-Vento", color: "Azul", img: "/src/assets/produtos/Cortavento.png", price: 150.00 },
    { id: 9, titulo: "Samba Masculino", color: "Azul", img: "/src/assets/produtos/SambaMasculino.png", price: 40.00 },
    { id: 10, titulo: "Samba Feminino", color: "Azul", img: "/src/assets/produtos/SambaFeminino.png", price: 40.00 },
  ],
  Lanches: [
    { id: 11, titulo: "Sanduíche natural", color: "Misto", img: "/src/assets/produtos/sanduiche.jpg", price: 15.00 },
    { id: 12, titulo: "Ruffles", color: "Tradicional", img: "/src/assets/produtos/ruffles.jpg", price: 10.00 },
    { id: 13, titulo: "Lays", color: "Tradicional", img: "/src/assets/produtos/lays.jpg", price: 10.00 },
    { id: 14, titulo: "Trakinas", color: "Chocolate", img: "/src/assets/produtos/trakinas.jpg", price: 7.00 },
    { id: 15, titulo: "Torcida", color: "Pimenta", img: "/src/assets/produtos/torcida.jpg", price: 7.00 },
    { id: 16, titulo: "Amendoim", color: "Japonês", img: "/src/assets/produtos/amendoim.jpg", price: 5.00 },
    { id: 17, titulo: "Pipoca de microondas", color: "Temperada", img: "/src/assets/produtos/pipoca.jpg", price: 5.00 },
    { id: 18, titulo: "Trident", color: "Menta", img: "/src/assets/produtos/trident.jpg", price: 2.99 },
    { id: 19, titulo: "Halls", color: "Black", img: "/src/assets/produtos/halls.jpg", price: 2.99 },
    { id: 20, titulo: "Ouro Branco", color: "Chocolate Branco", img: "/src/assets/produtos/chocolate.jpg", price: 1.99 },
  ],
  Bebidas: [
    { id: 21, titulo: "Refrigerante", color: "Coca-Cola", img: "/src/assets/produtos/refrigerante.jpg", price: 6.00 },
    { id: 22, titulo: "Suco Del-Valle", color: "Laranja", img: "/src/assets/produtos/suco.jpg", price: 4.00 },
    { id: 23, titulo: "Energético Monster", color: "Tradicional", img: "/src/assets/produtos/energetico.jpg", price: 10.00 },
    { id: 24, titulo: "Água", color: "Com gás", img: "/src/assets/produtos/aguagas.jpg", price: 2.50 },
    { id: 25, titulo: "Água", color: "Sem gás", img: "/src/assets/produtos/agua.jpg", price: 2.00 },
    { id: 26, titulo: "Café", color: "Café preto", img: "/src/assets/produtos/cafe.jpg", price: 3.00 },
  ],
  Tabacaria: [
    { id: 27, titulo: "Cigarro", color: "Unidade", img: "/src/assets/produtos/cigarro.jpg", price: 2.99 },
    { id: 28, titulo: "Cigarro de palha", color: "Tradicional", img: "/src/assets/produtos/palha.jpg", price: 1.99 },
    { id: 29, titulo: "Seda", color: "Unidade", img: "/src/assets/produtos/seda.jpg", price: 1.00 },
    { id: 30, titulo: "Piteira", color: "Unidade", img: "/src/assets/produtos/piteira.jpg", price: 1.10 },
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
            category === item.menu_name ? "border-2 border-blue-500" : "border border-transparent"
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

const ProductCard = ({ product }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleConfirm = () => {
    setIsConfirmed(true);
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
        <h3 className="font-semibold text-lg text-gray-800">{product.titulo}</h3>
        <p className="text-sm text-gray-500">{product.color}</p>
        <p className="text-sm text-green-500">Em estoque</p>
        <p className="text-lg text-gray-900">R$ {product.price.toFixed(2)}</p>
        <button
          onClick={() => setSelectedProductId(product.id)}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 transition-colors duration-200 hover:bg-blue-700"
        >
          Adicionar ao Carrinho
        </button>

        {selectedProductId === product.id && (
          <div className="mt-4">
            {product.titulo.includes("Kit") && (
              <div>
                <label className="block text-gray-700 font-medium">Selecione o tamanho:</label>
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
              <label className="block text-gray-700 font-medium">Quantidade:</label>
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
              <p className="text-green-600 mt-2">Produto adicionado ao carrinho!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ExploreMenu = () => {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const loadProducts = () => {
    const products = category === "All" ? Object.values(productData).flat() : productData[category] || [];
    const filteredProducts = products.filter((produto) =>
      produto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-neutral-900 mb-3">
        Explore nossas opções disponíveis!
      </h1>
      <p className="text-neutral-700 max-w-md text-center mb-6">
        Desde comidas e bebidas, até produtos dos kits anteriores.
      </p>

      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg mb-4 w-full max-w-md focus:ring focus:ring-blue-200 transition-colors duration-200"
      />

      <MenuList category={category} setCategory={setCategory} />

      <div className="flex gap-4 mt-6">
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)} 
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
        >
          <option value="asc">Preço: Menor para Maior</option>
          <option value="desc">Preço: Maior para Menor</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-6">
        {loadProducts().map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
