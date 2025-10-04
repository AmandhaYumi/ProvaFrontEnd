
import SugartImg from "../../assets/sugart.jpg";
import Integrantes from "../../assets/integrantes.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { TipoUsuario } from "../../types/tipoUsuario";
import { useForm } from "react-hook-form";

const URL_API = import.meta.env.VITE_URL_API_USUARIOS;

export default function CadUsuario() {
  useEffect(() => {
    document.title = "Cadastros de Usuário";
  }, []);

  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors, isSubmitting, isValid } } = useForm<TipoUsuario>({ mode: "onChange" });

  const onSubmit = async (dados: TipoUsuario) => {
    try {
      const responseUsuario = await fetch(`${URL_API}?nomeUsuario=${dados.nomeUsuario}`);
      const usuariosComMesmoNome = await responseUsuario.json();
      if (usuariosComMesmoNome.length > 0) {
        alert("Já tem usuário com esse nome!");
        return;
      }

      const responseEmail = await fetch(`${URL_API}?email=${dados.email}`);
      const usuariosComMesmoEmail = await responseEmail.json();
      if (usuariosComMesmoEmail.length > 0) {
        alert("Opa! Esse email já tem cadastro aqui");
        return;
      }

      await fetch(URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
      });

      localStorage.setItem("usuarioNome", dados.nome);
      localStorage.setItem("usuarioEmail", dados.email);

      alert("Usuário cadastrado com sucesso!");
      navigate("/login");

    } catch (erro) {
      console.error("Erro no cadastro", erro);
      alert("Ocorreu um erro, tente novamente");
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
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
        className="absolute top-[1%] right-[40%] w-90 pointer-events-none"
      />

      <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="formularios z-10 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full mt-32"
      >

        <h1 className="text-2xl font-bold text-center mb-6">Crie sua conta sugartalking!</h1>

        <div className="space-y-1 mb-4">
          <label htmlFor="nome" className="block text-sm font-medium">Nome:</label>
          <input
            type="text"
            id="nome"
            {...register("nome", { required: "Informe seu nome", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}
            className="inputlogcad"
            placeholder="Digite seu nome..."
          />
          {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
        </div>

        <div className="space-y-1 mb-4">
          <label htmlFor="nomeUsuario" className="block text-sm font-medium">Nome de usuário:</label>
          <input
            type="text"
            id="nomeUsuario"
            {...register("nomeUsuario", { required: "Informe um nome de usuário", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}
            className="inputlogcad"
            placeholder="Digite seu nome de usuário..."
          />
          {errors.nomeUsuario && <p className="text-red-500 text-sm">{errors.nomeUsuario.message}</p>}
        </div>

        <div className="space-y-1 mb-6">
          <label htmlFor="email" className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Informe seu email", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" } })}
            className="inputlogcad"
            placeholder="Digite seu email..."
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting || !isValid} className="botaoenviar w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </main>
  );
}
