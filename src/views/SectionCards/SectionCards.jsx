import { Col, Row } from "antd";
import { FaCalendarCheck, FaHandHoldingHand } from "react-icons/fa6";
import CardService from "../../components/CardService";
import { FaHandsHelping } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";
import { BsPersonCheckFill } from "react-icons/bs";
import brain from "../../assets/brain.png";
import medicoPng from "../../assets/medico.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SectionCardsAndSobre = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    cardsRef.current.forEach((card) => {
      const animationSettings = {
        opacity: 0,
        y: isMobile ? 30 : 50,
        rotation: isMobile ? 5 : 10,
        scale: 0.9,
      };

      gsap.fromTo(card, animationSettings, {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: isMobile ? "top 75%" : "top 65%",
          end: isMobile ? "top 30%" : "top 10%",
          markers: false,
        },
      });
    });
  }, []);

  return (
    <section className="w-full min-h-[130vh] bg-image1 bg-cover pb-[90px] px-5 md:px-10 lg:px-[4rem] xl:px-[8rem] 2xl:px-[15rem] z-[3]">
      <div className="z-[3]">
        <Row gutter={[30, 55]} className="z-[3] min-h-[200px]">
          <Col xs={24} sm={12} md={12} lg={8}>
            <div ref={(el) => (cardsRef.current[0] = el)}>
              <CardService
                icon={
                  <PiChartLineUpBold
                    color="#fffaf1"
                    className="text-[27px] lg:text-[35px]"
                  />
                }
                title="Inovação"
                content="Com tecnologias e abordagens modernas, buscamos aprimorar os tratamentos para promover resultados eficientes e acessíveis."
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <div ref={(el) => (cardsRef.current[1] = el)}>
              {" "}
              <CardService
                icon={
                  <FaHandsHelping
                    color="#fffaf1"
                    className="text-[27px] lg:text-[35px]"
                  />
                }
                title="Excelência"
                content="Nosso trabalho é baseado em altos padrões de qualidade e práticas recomendadas, oferecendo atendimento eficaz e seguro."
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <div ref={(el) => (cardsRef.current[2] = el)}>
              <CardService
                icon={
                  <FaCalendarCheck
                    color="#fffaf1"
                    className="text-[27px] lg:text-[35px]"
                  />
                }
                title="Flexibilidade"
                content="Adaptamos nossos métodos e horários para atender às suas necessidades, sempre respeitando o seu tempo e individualidade."
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={{ offset: 4, span: 8 }}>
            <div ref={(el) => (cardsRef.current[3] = el)}>
              <CardService
                icon={
                  <FaHandHoldingHand
                    color="#fffaf1"
                    className="text-[27px] lg:text-[35px]"
                  />
                }
                title="Ética"
                content="Mantemos a privacidade e o sigilo de dados, garantindo um alto padrão de comprometimento."
              />
            </div>
          </Col>
          <Col
            xs={24}
            sm={{ offset: 6, span: 12 }}
            md={{ offset: 6, span: 12 }}
            lg={{ offset: 0, span: 8 }}
          >
            <div ref={(el) => (cardsRef.current[4] = el)}>
              <CardService
                icon={
                  <BsPersonCheckFill
                    color="#fffaf1"
                    className="text-[27px] lg:text-[35px]"
                  />
                }
                title="Humanização"
                content="Oferecemos tratamentos baseados em evidências, com apoio emocional e respeito à singularidade de cada pessoa."
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-20 md:mt-36 lg:mt-36 mb-0 md:mb-14 lg:mb-14">
        <div className="w-full min-h-[500px] bg-gradient-to-br from-blue-800 via-blue-500 via-50% to-blue-700 rounded-[45px] mt-5 py-10 px-5 flex items-center justify-center relative shadow-2xl">
          <Row
            gutter={[30, 30]}
            className="z-[3] pb-16 md:pb-0 lg:pb-0 flex items-center justify-center"
          >
            <Col
              xs={24}
              sm={24}
              md={10}
              className="flex items-center justify-center relative"
            >
              <div className="w-[230px] h-[230px] md:w-[260px] md:h-[260px] lg:w-[370px] lg:h-[370px] rounded-[100%] bg-azulMarinho overflow-hidden shadow-2xl">
                <img
                  src={medicoPng}
                  alt="Imagem sobreposta"
                  className="w-full h-full object-cover mt-3 hover:scale-[107%] duration-500"
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} className="text-offWhite">
              <p className="font-poppins text-[30px] md:text-[35px] lg:text-[35px] font-thin drop-shadow-2xl">
                Sobre{" "}
                <span className="text-azulMarinho font-extrabold">nós</span>
              </p>
              <p className="font-poppins text-[12.5px] md:text-[14px] lg:text-[14px] leading-6 lg:leading-8 mt-4 drop-shadow-2xl">
                Somos uma clínica online de saúde mental comprometida em
                oferecer acesso fácil, seguro e de alta qualidade a serviços
                psicológicos em qualquer lugar do Brasil. Conectamos pacientes a
                profissionais especializados, democratizando o cuidado mental
                por meio de uma plataforma digital prática e acolhedora. Nossa
                missão é eliminar barreiras geográficas e sociais, promovendo{" "}
                <span className="text-azulMarinho font-extrabold">
                  bem-estar
                </span>{" "}
                e{" "}
                <span className="text-azulMarinho font-extrabold">
                  qualidade de vida
                </span>{" "}
                com um atendimento eficiente e humanizado.
              </p>
            </Col>
          </Row>
          <div className="absolute bottom-5 right-4">
            <img src={brain} alt="brain" className="w-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCardsAndSobre;
