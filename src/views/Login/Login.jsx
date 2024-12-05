import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="bg-image4 bg-cover bg-center h-screen flex flex-col items-center font-poppins justify-center text-marrom">
      <div className="">
        <h2 className="text-xl mb-6 text-center my-0">
          Bem vindo ao{" "}
          <span className="font-bold text-laranja">Mente Conecta!</span>
        </h2>
      </div>

      <div className="bg-[#ececec] opacity-80 p-8 rounded-2xl shadow-lg w-full max-w-sm mx-5">
        <h2 className="text-[15px] mb-6 text-center font-bold">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-normal mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block  text-sm font-normal mb-2"
              htmlFor="password"
            >
              Senha:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-[-20px]">
            <p className="text-[12px]">
              Esqueceu a senha?
              <Link className="text-laranja ml-1">Resetar senha</Link>
            </p>
          </div>
          <div className="flex items-center w-full mt-5">
            <button className="bg-marrom text-white text-center px-6 py-2 rounded-[10px] h-13 w-full font-poppins md:text-[13px] xl:text-[13px] 2xl:text-[13.5px]  duration-500">
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
