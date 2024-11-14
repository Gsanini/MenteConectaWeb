import { Col, Row } from "antd";

import medico1 from "../../assets/doctorWoman.png";
import medico2 from "../../assets/menDoctor.png";
import medico3 from "../../assets/doctorWoman2.png";
import CardProfissionais from "../../components/CardProfissionais";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionProfissionais = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const cards = mainRef.current.querySelectorAll(".card");

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const startOffset = isMobile ? "top 80%" : "top 70%";
    const endOffset = isMobile ? "top 20%" : "top 0%";

    gsap.fromTo(
      cards[0],
      { opacity: 0, x: -100 }, // Da esquerda
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cards[0],
          start: startOffset,
          end: endOffset,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cards[1],
      { opacity: 0, y: 100 }, // De baixo
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cards[1],
          start: startOffset,
          end: endOffset,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cards[2],
      { opacity: 0, x: 100 }, // Da direita
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cards[2],
          start: startOffset,
          end: endOffset,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      className="w-full min-h-[70vh] bg-image2 bg-cover overflow-x-hidden pt-[5rem] pb-[5rem] md:pt-[8rem] md:pb-[10rem] lg:pt-[8rem] lg:pb-[10rem] z-[3] font-poppins px-5 md:px-10 lg:px-[4rem] xl:px-[8rem] 2xl:px-[15rem] block justify-center"
      ref={mainRef}
    >
      <div className="flex items-center">
        <div className="w-[5px] h-[50px] bg-marrom rounded-full" />
        <h2 className="text-[25px] md:text-[30px] font-thin text-start text-marrom ml-3">
          Nossos <span className="font-bold">Profissionais</span>
        </h2>
      </div>
      <div className="z-[3] flex mt-5">
        <Row gutter={[30, 30]} className="z-[3]">
          <Col xs={24} sm={12} md={12} lg={8}>
            <div className="card">
              <CardProfissionais
                nome="Roberta"
                sobrenome="Cardozo"
                descricao="Psicoterapeuta e psiquiatra especializada em transtornos de personalidade, usa psicoterapia psicanalítica e medicamentos para ajudar seus pacientes a lidar com desafios emocionais complexos."
                img={medico1}
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <div className="card">
              {" "}
              <CardProfissionais
                nome="Guilherme"
                sobrenome="Almeida"
                descricao="Psiquiatra especializado em transtornos de ansiedade e depressão. Com mais de 10 anos de experiência, combina psicoterapia e medicação para tratar seus pacientes."
                img={medico2}
              />
            </div>
          </Col>
          <Col
            xs={24}
            sm={{ offset: 6, span: 12 }}
            md={{ offset: 6, span: 12 }}
            lg={{ offset: 0, span: 8 }}
          >
            <div className="card">
              {" "}
              <CardProfissionais
                nome="Ana"
                sobrenome="Carolina"
                descricao="Psicóloga clínica focada em trauma e transtornos pós-traumáticos. Utiliza a Terapia Cognitivo-Comportamental para ajudar seus pacientes a superar dificuldades emocionais."
                img={medico3}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SectionProfissionais;
