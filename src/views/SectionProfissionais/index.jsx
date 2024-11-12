import { Col, Row } from "antd";
import back1 from "../../assets/back1.svg";

import medico1 from "../../assets/doctorWoman.png";
import medico2 from "../../assets/menDoctor.png";
import medico3 from "../../assets/doctorWoman2.png";
import CardProfissionais from "../../components/CardProfissionais";

const SectionProfissionais = () => {
  return (
    <section
      className="w-full min-h-[70vh] bg-cover pt-[5rem] pb-[5rem] md:pt-[8rem] md:pb-[10rem] lg:pt-[8rem] lg:pb-[10rem] z-[3] font-poppins px-5 md:px-10 lg:px-[4rem] xl:px-[8rem] 2xl:px-[15rem] block justify-center "
      style={{
        backgroundImage: `url(${back1})`,
      }}
    >
      <div className="flex">
        <div className="w-[5px] h-[50px] bg-marrom rounded-full" />
        <h2 className="text-[30px] md:text-[35px] font-thin text-start text-marrom ml-3">
          Nossos <span className="font-bold">Profissionais</span>
        </h2>
      </div>
      <div className="z-[3] flex mt-5">
        <Row gutter={[30, 30]} className="z-[3]">
          <Col xs={24} sm={12} md={12} lg={8}>
            <CardProfissionais
              nome="Natália Gallio"
              descricao="Psicoterapeuta e psiquiatra especializada em transtornos de personalidade, usa psicoterapia psicanalítica e medicamentos para ajudar seus pacientes a lidar com desafios emocionais complexos."
              img={medico1}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            {" "}
            <CardProfissionais
              nome="Gabriel Campos Sanini"
              descricao="Psiquiatra especializado em transtornos de ansiedade e depressão. Com mais de 10 anos de experiência, combina psicoterapia e medicação para tratar seus pacientes."
              img={medico2}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            {" "}
            <CardProfissionais
              nome="Jaqueline Gallio"
              descricao="Psicóloga clínica focada em trauma e transtornos pós-traumáticos. Utiliza a Terapia Cognitivo-Comportamental para ajudar seus pacientes a superar dificuldades emocionais."
              img={medico3}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SectionProfissionais;
