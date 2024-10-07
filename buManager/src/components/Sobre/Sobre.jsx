import sobreImg from "../../assets/sobre/sobreImg.png";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold text-blue-600">Sobre nós</h1>
          <p className="text-base text-gray-600 mt-4">
            Conheça um pouco da história, conquistas e valores da Bateria Computaria.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 p-4 lg:p-8 flex items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <img
                className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 border-4 border-blue-400"
                src={sobreImg}
                alt="sobre"
              />
            </motion.div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 p-4 lg:p-8 flex items-center"
          >
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-700 my-4 leading-relaxed">
                Fundada em 2015 na Universidade Federal de Uberlândia, mais
                especificamente no bloco 1B, a Bateria Computaria é uma das mais
                populares dentro do cenário de baterias de Minas Gerais. E com o
                passar dos dias essa popularidade vai se espalhando cada vez
                mais não só no estado mas também no Brasil devido a feitos
                recentes e históricos da mesma no cenário, sendo a primeira
                bateria de curso de Minas Gerais a alcançar um pódio em um
                campeonato de porte nacional (Tabu 2024 grupo ascendente),
                confirmando a vaga para a divisão principal.
              </p>
              <p className="text-lg text-gray-700 my-4 leading-relaxed">
                Porém, não só de títulos e taças se resume a história dos
                Computeiros... Essa turma também é muito famosa pelos seus rolês
                históricos, sempre com muita tinta, mordeção de chinelo,
                integração e aquele balanço envolvente que só a Swingeira do
                Bronx pode proporcionar. Prezando sempre pela diversão,
                respeito, dedicação e amor, eles carregam o lema: Bateria por
                amor, família por acaso!
              </p>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/sobre"
                className="inline-block bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 mt-6 hover:bg-blue-500"
              >
                Clique e saiba mais
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
