import imgLogo from "../assets/logoMenteConecta.png";

const Logo = () => {
  return (
    <div className="z-[2]">
      <a href="#home">
        <img
          src={imgLogo}
          alt="logoConecta"
          className="w-[150px] lg:w-[210px] "
        />
      </a>
    </div>
  );
};

export default Logo;
