import { useState } from "react";
import Logo from "../../components/Logo";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClicado, setMenuClicado] = useState("Home");

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-offWhite flex justify-between items-center py-3 px-5 md:px-10 lg:px-[4rem] xl:px-[8rem] 2xl:px-[15rem]">
      <Logo />
      {/* Menu de navegação em telas grandes */}
      <nav className="hidden lg:flex items-center text-white z-[2]">
        <ul className="flex w-full text-azulMarinho font-poppins space-x-2 md:space-x-4 lg:space-x-8 md:text-[13px]">
          {["Home", "Sobre", "Profissionais", "Agendar Consulta"].map(
            (item) => (
              <li
                key={item}
                onClick={() => setMenuClicado(item)}
                className="relative hover:shadow-xl transition-shadow duration-500"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={
                    menuClicado === item
                      ? "border-b-2 border-solid border-azulMarinho "
                      : ""
                  }
                >
                  {item.toUpperCase()}
                </a>
              </li>
            )
          )}
        </ul>
        <div className="ml-3 lg:ml-7 ">
          <button className="bg-azulMarinho text-white px-6 py-2 rounded-[10px] h-13 font-poppins text-[13px] flex items-center shadow transition-shadow duration-900 hover:shadow-xl">
            LOGIN
            <span className="ml-3">
              <FiLogIn size={18} />
            </span>
          </button>
        </div>
      </nav>

      {/* Ícone de hambúrguer para telas pequenas */}
      <div className="lg:hidden mt-2 z-[2]">
        <button onClick={handleMenuToggle}>
          <FiMenu size={20} className="text-offWhite" />
        </button>
      </div>

      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-offWhite bg-opacity-95 shadow-lg z-[3] transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-end mt-5 mr-5">
          <FiX
            size={20}
            className="text-azulMarinho"
            cursor="pointer"
            onClick={handleMenuToggle}
          />
        </div>
        <ul className="flex flex-col items-start ml-5 text-azulMarinho font-poppins space-y-4  text-[11px] mt-[3rem]">
          {["Home", "Sobre", "Profissionais", "Agendar Consulta"].map(
            (item) => (
              <li
                key={item}
                onClick={() => {
                  setMenuClicado(item);
                  setMenuOpen(false); // Fecha o menu ao clicar em um item
                }}
                className="relative hover:shadow-xl transition-shadow duration-500"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={
                    menuClicado === item
                      ? "border-b-2 border-solid border-azulMarinho"
                      : ""
                  }
                >
                  {item.toUpperCase()}
                </a>
              </li>
            )
          )}
          <li>
            <button className="bg-azulMarinho text-white px-6 py-2 rounded-[10px] font-poppins text-[11px] flex items-center shadow transition-shadow duration-900 hover:shadow-xl">
              LOGIN
              <span className="ml-3">
                <FiLogIn size={15} />
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
