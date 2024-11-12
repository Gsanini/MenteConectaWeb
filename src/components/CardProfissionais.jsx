import { Card } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";

const CardProfissionais = ({ nome, descricao, img }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className="w-full h-[470px] rounded-[20px] bg-white bg-opacity-5 backdrop-blur-sm overflow-hidden flex justify-center relative"
      bordered={false}
      style={{ boxShadow: "0 7px 20px rgba(0, 0, 0, 0.25)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="mt-12">
        <img
          src={img}
          alt="Imagem sobreposta"
          className="w-full h-[25rem] object-cover drop-shadow-2xl"
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-offWhite text-marrom shadow-2xl min-h-[28%]  p-4 rounded-t-[30px] transition-all duration-500 ease-in-out transform ${
          hover ? "translate-y-[0%]" : "translate-y-[100%]"
        }`}
        style={{ boxShadow: "0 2px 40px rgba(0, 0, 0, 0.25)" }}
      >
        <h3 className="text-lg font-bold font-poppins">{nome}</h3>
        <p className="mt-2 font-poppins text-[12px] text-gray-500">
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
};

export default CardProfissionais;
