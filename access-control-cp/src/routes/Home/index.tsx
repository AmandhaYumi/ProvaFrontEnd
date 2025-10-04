import { useEffect } from "react";
import type { tipoLogin } from "../../types/tipoLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SugartImg from "../../assets/sugart.jpg";
import Integrantes from "../../assets/integrantes.png";
import FundoImg from "../../assets/fundo1.jpg";

const URL_API = import.meta.env.VITE_URL_API_USUARIOS;

export default function Home() {
  useEffect(() => {
    document.title = "Login - Sugartalking";
  }, []);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<tipoLogin>({ mode: "onChange" });

  const onSubmit = async (dados: tipoLogin) => {
    try {
      const response = await fetch(`${URL_API}?nomeUsuario=${dados.nomeUsuario}&email=${dados.email}`);
      const usuarios = await response.json();

      if (usuarios.length > 0) {
        const usuario = usuarios[0];

        localStorage.setItem("usuarioLogado", JSON.stringify({
          id: usuario.id,
          nome: usuario.nome,
          nomeUsuario: usuario.nomeUsuario,
          email: usuario.email,
        }));

        alert(`Bem-vindo(a), ${usuario.nome}!`);
        navigate("/Logado");
      } else {
        alert("Usuário ou email incorretos!");
      }
    } catch (erro) {
      console.error("Erro no login", erro);
      alert("Ocorreu um erro ao tentar fazer login, tente novamente");
    }
  };

  return (

      <main 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${FundoImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      >
      <img
        src={SugartImg}
        alt="SugarT canto"
        className="absolute top-[5%] left-[10%] w-30 animate-pulse pointer-events-none"
      />
      <img
        src={SugartImg}
        alt="SugarT canto"
        className="absolute top-[5%] right-[10%] w-30 animate-pulse pointer-events-none"
      />
      <img
        src={SugartImg}
        alt="SugarT canto"
        className="absolute bottom-[5%] left-[10%] w-30 animate-pulse pointer-events-none"
      />
      <img
        src={SugartImg}
        alt="SugarT canto"
        className="absolute bottom-[5%] right-[10%] w-30 animate-pulse pointer-events-none"
      />
      <img
        src={SugartImg}
        alt="SugarT canto"
        className="absolute top-[45%] left-[20%] w-30 animate-pulse pointer-events-none"
      />
      <img
        src={SugartImg}
        alt="SugarT canto"
        className="absolute top-[45%] right-[20%] w-30 animate-pulse pointer-events-none"
      />
      <img
        src={Integrantes}
        alt="SugarT canto"
        className="absolute top-[3%] right-[41,5%] w-90 pointer-events-none"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="formularios z-10 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full"
      >
        <h1 className="text-center text-2xl font-bold mb-6">
          🎵 Acesse sua conta Sugartalking! 🎸
        </h1>

        <div className="space-y-1">
          <label htmlFor="nomeUsuario" className="block text-sm font-medium">
            Nome de usuário:
          </label>
          <input
            type="text"
            id="nomeUsuario"
            {...register("nomeUsuario", {
              required: "Informe seu nome de usuário",
              minLength: { value: 3, message: "Mínimo 3 caracteres" },
            })}
            className="inputlogcad"
            placeholder="Digite seu nome de usuário..."
          />
          {errors.nomeUsuario && (
            <p className="text-red-500 text-sm">{errors.nomeUsuario.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Informe seu email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
            className="inputlogcad"
            placeholder="Digite seu email..."
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="botaoenviar"
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>

        <p className="text-center text-sm mt-4">
          Ainda não tem uma conta?{" "}
          <Link
            to="/cadastro"
            className="text-blue-600 hover:underline font-medium"
          >
            Cadastre-se aqui
          </Link>
        </p>
      </form>
    </main>
  );
}
