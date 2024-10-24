import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaMedal, FaCrown } from "react-icons/fa";
import { useState } from "react";

const Sobre = () => {
  const [showAll, setShowAll] = useState(false);

  const diretores = [
    { nome: "Fulano presidente", cargo: "Presidente", foto:"/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano vice", cargo: "Vice-presidente", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano mestre", cargo: "Mestre", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano financeiro", cargo: "Financeiro", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano patrimônio", cargo: "Patrimonio", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano patrimônio", cargo: "Patrimonio", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano eventos", cargo: "Eventos", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano eventos", cargo: "Eventos", foto:"/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano mkt", cargo: "Marketing", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano mkt", cargo: "Marketing", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano RP", cargo: "Relações públicas", foto: "/src/assets/sobre/diretor.jpg" },
    { nome: "Fulano RP", cargo: "Relações públicas", foto: "/src/assets/sobre/diretor.jpg" },
  ];

  const visibleDiretores = showAll ? diretores : diretores.slice(0, 3);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Nossos Diretores
      </h2>
      {/* Seção de História */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          <TypeAnimation
            sequence={["Nossa História", 2000, "Uma Jornada de Sucesso", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-600"
          />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-600 leading-relaxed"
        >
          <p className="text-lg text-gray-700 my-4 leading-relaxed">
            Fundada em 2015 na Universidade Federal de Uberlândia, mais
            especificamente no bloco 1B, a Bateria Computaria é uma das mais
            populares dentro do cenário de baterias de Minas Gerais. E com o
            passar dos dias essa popularidade vai se espalhando cada vez mais
            não só no estado mas também no Brasil devido a feitos recentes e
            históricos da mesma no cenário, sendo a primeira bateria de curso de
            Minas Gerais a alcançar um pódio em um campeonato de porte nacional
            (Tabu 2024 grupo ascendente), confirmando a vaga para a divisão
            principal.
          </p>
          <p className="text-lg text-gray-700 my-4 leading-relaxed">
            Porém, não só de títulos e taças se resume a história dos
            Computeiros... Essa turma também é muito famosa pelos seus rolês
            históricos, sempre com muita tinta, mordeção de chinelo, integração
            e aquele balanço envolvente que só a Swingeira do Bronx pode
            proporcionar. Prezando sempre pela diversão, respeito, dedicação e
            amor, eles carregam o lema: Bateria por amor, família por acaso!
          </p>
        </motion.p>
      </section>

      {/* Seção de Diretores com Framer Motion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Nossos Diretores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleDiretores.map((diretor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center bg-white shadow-lg rounded-lg p-6"
            >
              <img
                src={diretor.foto}
                alt={`Foto de ${diretor.nome}`}
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4 border-4 border-blue-500" 
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {diretor.nome}
              </h3>
              <p className="text-gray-500">Cargo: {diretor.cargo}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão "Ver Mais" */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all" 
          >
            {showAll ? "Ver Menos" : "Ver Mais"}
          </button>
        </div>
      </section>

{/* Seção de Conquistas com Ícones */}
<section>
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Conquistas</h2>
  <motion.ul
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="list-none text-gray-600 space-y-4"
  >
    {/* Conquistas adicionais */}
    <li className="mt-6">
      <h3 className="text-xl font-bold text-gray-700">TABU 2024 - Divisão Ascendente:</h3>
      <ul className="list-none ml-8 mt-2 text-gray-600">
        <li className="flex items-center">
          <FaCrown className="text-blue-600 mr-3" /> 3° Colocado
        </li>
        <li className="flex items-center">
          <FaMedal className="text-blue-600 mr-3" /> Classificados para a divisão estrela
        </li>
      </ul>
    </li>

    <li className="mt-6">
      <h3 className="text-xl font-bold text-gray-700">Campeonato de baterias do DCE 2023:</h3>
      <ul className="list-none ml-8 mt-2 text-gray-600">
        <li className="flex items-center">
          <FaMedal className="text-blue-600 mr-3" /> Estandartes: Repique e Agogô
        </li>
      </ul>
    </li>

    <li className="mt-6">
      <h3 className="text-xl font-bold text-gray-700">Batuca Franca 2022:</h3>
      <ul className="list-none ml-8 mt-2 text-gray-600">
        <li className="flex items-center">
          <FaCrown className="text-blue-600 mr-3" /> Campeão
        </li>
        <li className="flex items-center">
          <FaMedal className="text-blue-600 mr-3" /> Estandartes: Mestre, Tamborim, Surdo de marcação, Surdo de terceira, Instrumento complementar (Repique mor)
        </li>
      </ul>
    </li>
  </motion.ul>
</section>

    </div>
  );
};

export default Sobre;
