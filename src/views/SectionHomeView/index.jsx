import { Typewriter } from "react-simple-typewriter";
import SVGAnimation from "../../components/svgs/SvgAnimation";
import SvgAnimationHome from "../../components/svgs/SvgCalendarHome";

const SectionHomeView = () => {
  return (
    <section className="bg-offWhite min-h-[calc(100vh_-_200px)] flex justify-between py-12 px-5 md:px-10 lg:px-[4rem] xl:px-[8rem] 2xl:px-[15rem]">
      <div className="flex flex-col justify-center items-center w-full text-start lg:items-start z-[2]">
        <h1 className="text-azulMarinho text-[25px] font-poppins text-start font-extralight md:text-[30px] lg:text-[35px] xl:text-[40px]">
          Levando{" "}
          <span className="font-bold">
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
        <p className="text-gray-400 text-[12px] font-poppins mt-5 text-center lg:text-[14px] md:text-start">
          A <span className="text-laranja font-medium">Mente Conecta</span> é
          uma plataforma{" "}
          <span className="md:hidden">
            <br />
          </span>
          que oferece acesso direto aos melhores{" "}
          <span className="hidden md:flex mt-[-20px]">
            <br />
          </span>
          profissionais especializados em
          <span className="text-laranja font-medium"> saúde mental</span>.
        </p>
        <button className="border border-laranja text-laranja px-6 rounded-[20px] h-12 font-poppins text-[13px] flex items-center shadow transition-shadow duration-500 hover:shadow-xl hover:bg-laranja hover:text-white mt-6 lg:text-[16px]">
          Agende agora
          <span className="ml-3">
            <SVGAnimation />
          </span>
        </button>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center w-full lg:items-end z-[2]">
        <SvgAnimationHome />
      </div>
    </section>
  );
};

export default SectionHomeView;
