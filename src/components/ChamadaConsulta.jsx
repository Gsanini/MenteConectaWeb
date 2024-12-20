import { GoCodeOfConduct } from "react-icons/go";

const ChamadaConsulta = () => {
  return (
    <div className="w-full min-h-[170px] py-5 bg-gradient-to-bl from-slate-200 via-slate-400 to-slate-600 text-white font-poppins px-6 flex items-center justify-center mt-[-15px] z-[4]">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div>
          <p className="text-[30px] md:text-[40px] font-thin text-center md:text-left ">
            <span className="font-extrabold text-gray-600">Cuide</span> de você!
          </p>
          <p className="text-[15px] md:text-[17px] font-thin text-center md:text-center ">
            Cuide da sua{" "}
            <span className="font-extrabold text-gray-600">saúde!</span>
          </p>
        </div>
        <div className="flex items-center justify-center md:ml-10 lg:ml-12 mt-3 md:mt-0">
          <button className="z-[4] border-2 text-white px-6 md:px-8 py-2 rounded-[50px] h-12 md:h-16 font-poppins text-[13px] 2xl:text-[17px] flex items-center hover:shadow-xl shadow-2xl transition-all duration-300 hover:border-offWhite hover:bg-offWhite hover:text-gray-600">
            Ache ajuda aqui!
            <span className="ml-3">
              <GoCodeOfConduct size={23} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChamadaConsulta;
