import { TypeAnimation } from "react-type-animation";
import lobin from "../../assets/home/img1.png";
import Produtos from "../../components/Produtos/Produtos";

const Home = () => {
  return (
    <div className="bg-white pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pr-20 pl-20">
        <div>
          <img
            src={lobin}
            alt="lobin"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>

        <div className="col-span-2 px-5 my-auto text-center sm:text-right">
          <h1 className="text-blue-900 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            <span className="text-blue-600">Aqui você tem</span> <br />
            <TypeAnimation
              sequence={[
                "Controle de patrimônio",
                1000,
                "Venda de produtos",
                1000,
                "Anúncios",
                1000,
                "E muito ritmo!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-blue-800 text-lg sm:text-xl lg:text-2xl my-6">
            BuManager, a plataforma amiga da sua bateria universitária <br />
            Inscreva-se já!
          </p>

          <div className="my-8 flex flex-col sm:flex-row justify-center sm:justify-end gap-4">
            <a
              href="/login"
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center"
            >
              Login
            </a>
            <a
              href="/sobre"
              className="px-6 py-3 rounded-xl border border-blue-500 text-blue-500 text-center hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
      <Produtos /> 
    </div>
  );
};

export default Home;
