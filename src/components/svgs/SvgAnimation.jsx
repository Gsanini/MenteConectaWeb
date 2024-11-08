import { useState, useEffect } from "react";

// Importe ou defina seus SVGs aqui
import Frame1 from "../../assets/calendar1/calendar (1)_000.svg";
import Frame2 from "../../assets/calendar1/calendar (1)_001.svg";
import Frame3 from "../../assets/calendar1/calendar (1)_002.svg";
import Frame4 from "../../assets/calendar1/calendar (1)_003.svg";
import Frame5 from "../../assets/calendar1/calendar (1)_004.svg";
import Frame6 from "../../assets/calendar1/calendar (1)_005.svg";
import Frame7 from "../../assets/calendar1/calendar (1)_006.svg";
import Frame8 from "../../assets/calendar1/calendar (1)_007.svg";
import Frame9 from "../../assets/calendar1/calendar (1)_008.svg";
import Frame10 from "../../assets/calendar1/calendar (1)_009.svg";
import Frame11 from "../../assets/calendar1/calendar (1)_010.svg";
import Frame12 from "../../assets/calendar1/calendar (1)_011.svg";
import Frame13 from "../../assets/calendar1/calendar (1)_012.svg";
import Frame14 from "../../assets/calendar1/calendar (1)_013.svg";
import Frame15 from "../../assets/calendar1/calendar (1)_014.svg";
import Frame16 from "../../assets/calendar1/calendar (1)_015.svg";
import Frame17 from "../../assets/calendar1/calendar (1)_016.svg";
import Frame18 from "../../assets/calendar1/calendar (1)_017.svg";
import Frame19 from "../../assets/calendar1/calendar (1)_018.svg";
import Frame20 from "../../assets/calendar1/calendar (1)_019.svg";
import Frame21 from "../../assets/calendar1/calendar (1)_020.svg";
import Frame22 from "../../assets/calendar1/calendar (1)_021.svg";
import Frame23 from "../../assets/calendar1/calendar (1)_022.svg";
import Frame24 from "../../assets/calendar1/calendar (1)_023.svg";
import Frame25 from "../../assets/calendar1/calendar (1)_024.svg";
import Frame26 from "../../assets/calendar1/calendar (1)_025.svg";
import Frame27 from "../../assets/calendar1/calendar (1)_026.svg";
import Frame28 from "../../assets/calendar1/calendar (1)_027.svg";
import Frame29 from "../../assets/calendar1/calendar (1)_028.svg";

// Adicione mais frames conforme necessário

const frames = [
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  Frame7,
  Frame8,
  Frame9,
  Frame10,
  Frame11,
  Frame12,
  Frame13,
  Frame14,
  Frame15,
  Frame16,
  Frame17,
  Frame18,
  Frame19,
  Frame20,
  Frame21,
  Frame22,
  Frame23,
  Frame24,
  Frame25,
  Frame26,
  Frame27,
  Frame28,
  Frame29,
]; // Array com todos os quadros SVG

const SVGAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0); // Estado para rastrear o quadro atual

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length); // Alterna para o próximo quadro
    }, 100); // Ajuste a duração (em ms) para controlar a velocidade

    return () => clearInterval(interval); // Limpeza do intervalo
  }, []);

  return (
    <div className="flex justify-center items-center h-8 w-8 overflow-hidden mt-[-1px]">
      <img
        src={frames[currentFrame]}
        alt={`frame-${currentFrame}`}
        className="w-full h-full"
      />
    </div>
  );
};

export default SVGAnimation;
