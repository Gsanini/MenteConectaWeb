import { Typewriter } from "react-simple-typewriter";
import arrow from "../../assets/arrow.png";
import { LuCalendarSearch } from "react-icons/lu";
import foto from "../../assets/sorrindo.png";

const SectionHomeView = () => {
  return (
    <section className=" bg-image3 bg-cover min-h-[105vh] flex flex-col lg:flex-row justify-between items-center pb-[140px] pt-[180px] lg:py-[130px] px-5 md:px-10 lg:px-[4rem] xl:px-[8rem] 2xl:px-[15rem] lg:space-x-10">
      <div className="flex flex-col justify-center items-center w-full text-start lg:items-start z-[2]">
        <h1 className="text-marrom text-[25px] font-poppins text-start font-extralight md:text-[30px] lg:text-[30px] xl:text-[35px] 2xl:text-[35px]">
          Levando{" "}
          <span className="font-bold ">
            <Typewriter
              words={["saúde", "equilíbrio", "bem-estar"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
          <br />
          mental para todos.
        </h1>
        <p className="text-gray-400 text-[12px] font-poppins mt-5 text-center lg:text-[12px] 2xl:text-[14px] md:text-start ">
          A <span className="text-laranja font-medium">Mente Conecta</span> é
          uma plataforma{" "}
          <span className="md:hidden">
            <br />
          </span>
          que oferece acesso direto aos melhores profissionais especializados em
          <span className="text-laranja font-medium"> saúde mental</span>.
        </p>
        <div className="mt-5 flex items-center">
          <img src={arrow} alt="arrow" />
          <div className="ml-5 mt-9">
            <button className="border tracking-wide border-laranja text-laranja  md:w-[150%] px-6 lg:px-10 rounded-[20px] h-12 font-poppins text-[13px] flex items-center justify-center shadow transition-all duration-300 hover:shadow-xl hover:bg-laranja hover:text-white lg:text-[16px]">
              Agende agora
              <span className="ml-3">
                <LuCalendarSearch size={22} />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Imagem agora será visível abaixo da div à esquerda em telas menores */}
      <div className="lg:flex flex-col h-[300px] md:h-[500px] lg:h-[570px] justify-center items-center w-full lg:items-end z-[2] bg-gradient-to-tr from-orange-500 via-red-500 to-orange-600 rounded-[30px] overflow-hidden shadow-2xl lg:order-2 mt-10 lg:mt-0">
        <img
          src={foto}
          alt="Imagem"
          className="w-full h-full object-cover drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default SectionHomeView;
