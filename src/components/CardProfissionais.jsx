import { Card } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const CardProfissionais = ({ nome, sobrenome, descricao, img }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className="w-full h-[470px] rounded-[20px] bg-white bg-opacity-5 backdrop-blur-sm overflow-hidden flex justify-center relative"
      bordered={false}
      style={{ boxShadow: "0 7px 20px rgba(0, 0, 0, 0.25)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`mt-12 transition-all duration-800 ${
          hover ? "blur-sm" : ""
        }`}
      >
        <img
          src={img}
          alt="Imagem sobreposta"
          className="w-full h-[25rem] object-cover drop-shadow-2xl"
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-offWhite text-marrom shadow-2xl min-h-[28%] p-4 rounded-t-[20px] transition-all duration-500 ease-in-out transform  ${
          hover ? "translate-y-[05%] " : "translate-y-[60%] opacity-90"
        }`}
        style={{ boxShadow: "0 2px 40px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="mt-[-3px] flex items-center justify-between">
          <h3 className="text-[16px] lg:text-lg font-light font-poppins">
            {nome}
            <span className="ml-[5px]">{sobrenome}</span>
          </h3>
          <div
            className={`w-[30px] h-[30px] bg-gradient-to-tr from-orange-500 via-red-500 to-orange-600 text-offWhite rounded-[20px] flex items-center justify-center ml-[10px] shadow-lg transform-gpu transition-transform duration-1000 ${
              hover ? "rotate-180" : "rotate-0"
            }`}
          >
            <HiOutlineArrowSmUp size={22} />
          </div>
        </div>

        <p
          className={`mt-2 font-poppins text-[12px] text-gray-500 transition-all duration-900 ${
            hover ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          {descricao}
        </p>
      </div>
    </Card>
  );
};

CardProfissionais.propTypes = {
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  sobrenome: PropTypes.string.isRequired,
};

export default CardProfissionais;
