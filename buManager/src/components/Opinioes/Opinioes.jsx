import { motion } from "framer-motion";

const depoimentos = [
  {
    id: 1,
    quote:
      "Yeah, but it was a really smart thing to be right about, actually. Alright Dwight, as you know I am heading to New York today. [Dwight holds up passport.] Doing a presentation on the branch to the new CFO.",
    name: "Ricardo",
    img: "/src/assets/sobre/diretor.jpg",
  },
  {
    id: 2,
    quote:
      "So that's the problem, is solved. What? Okay. All right, come on. [picks up Cece from Pam, whispers to her] Where are we going? Where are we going? We're gonna take a little field trip.",
    name: "Pedro Lima",
    img: "/src/assets/sobre/diretor.jpg",
  },
  {
    id: 3,
    quote:
      "Well, apparently in the medicine community, negative means good. Which makes absolutely no sense. In the real world community, that would... be... chaos. And you brought this guy!",
    name: "Digão",
    img: "/src/assets/sobre/diretor.jpg",
  },
  {
    id: 4,
    quote:
      "untitled folder DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT DWIGHT",
    name: "Rick Ricarte",
    img: "/src/assets/sobre/diretor.jpg",
  },
  {
    id: 5,
    quote:
      "I am a diapering master. I have done little else in the past two months. There is nothing I cannot diaper. Go ahead. Try to think of something. I dare you.",
    name: "Joãozinho",
    img: "/src/assets/sobre/diretor.jpg",
  },
  {
    id: 6,
    quote: "[walking past Dwight's desk] Kitchen.",
    name: "Jhon Pi",
    img: "/src/assets/sobre/diretor.jpg",
  },
];

const Opinioes = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-50">
      <div className="text-center mb-10 max-w-[800px] w-full p-6">
        <p className="text-sm pb-2 text-blue-600 font-semibold uppercase tracking-wide">
          O que os fãs da Bateria e do BuManager estão dizendo
        </p>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Opiniões</h1>
        <p className="text-xl text-gray-600 mt-2">
          Leia o que nossos clientes têm a dizer sobre suas experiências na
          plataforma.
        </p>
      </div>

      <div className="overflow-hidden w-full max-w-7xl pb-9">
        <motion.div
          className="flex space-x-8 animate-marquee"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {depoimentos.map((depoimentos) => (
            <div
              key={depoimentos.id}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg w-[400px] min-w-[400px] h-[400px] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200"
            >
              <img
                src={depoimentos.img}
                alt={depoimentos.name}
                className="w-32 h-32 rounded-full border-4 border-blue-600 mb-4"
              />
              <div className="flex-grow flex flex-col justify-between text-center">
                <p className="text-gray-800 mb-4 text-lg italic">
                  &quot;{depoimentos.quote}&quot;
                </p>
                <h3 className="font-semibold text-blue-600 text-lg">
                  {depoimentos.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10">
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition duration-200">
          Deixe seu depoimento
        </button>
      </div>
    </div>
  );
};

export default Opinioes;
