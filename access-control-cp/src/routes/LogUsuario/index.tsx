import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

type TipoLogin = {
  nomeUsuario: string;
  email: string;
};

const URL_API = import.meta.env.VITE_URL_API_USUARIOS;

export default function LogUsuario() {
  useEffect(() => {
    document.title = "Login - Sugartalking";
  }, []);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TipoLogin>({ mode: "onChange" });

  const onSubmit = async (dados: TipoLogin) => {
    try {
      const response = await fetch(`${URL_API}?nomeUsuario=${dados.nomeUsuario}&email=${dados.email}`);
      const usuarios = await response.json();

      if (usuarios.length > 0) {
        const usuario = usuarios[0];
        
        localStorage.setItem("usuarioLogado", JSON.stringify({
          id: usuario.id,
          nome: usuario.nome,
          nomeUsuario: usuario.nomeUsuario,
          email: usuario.email
        }));

        alert(`Bem-vindo(a), ${usuario.nome}!`);
        navigate("/home"); 
      } else {
        alert("Usuário ou email incorretos!");
      }
    } catch (erro) {
      console.error("Erro no login", erro);
      alert("Ocorreu um erro ao tentar fazer login, tente novamente");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} className="formularios">
        <h1>Acesse sua conta sugartalking!</h1>

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
          <Link to="/cadastro" className="text-blue-600 hover:underline font-medium">
            Cadastre-se aqui
          </Link>
        </p>
      </form>
    </main>
  );
}