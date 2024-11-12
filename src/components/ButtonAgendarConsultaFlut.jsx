import { FaArrowRightLong } from "react-icons/fa6";

const ButtonAgendarConsultaFlut = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[5]">
      <button className="bg-marrom text-offWhite pl-[5px] rounded-[140px] h-[45px] lg:h-[50px] font-poppins text-[11px] lg:text-[13px] flex items-center shadow-[0px_0px_46px_-12px_#004A93] cursor-pointer min-w-[200px] whitespace-nowrap">
        <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-offWhite rounded-[140px] flex items-center justify-center">
          <FaArrowRightLong className="text-marrom text-[15px] lg:text-[19px]" />
        </div>
        <div className="px-4 pr-5 font-medium">Agendar uma consulta</div>
      </button>
    </div>
  );
};

export default ButtonAgendarConsultaFlut;
