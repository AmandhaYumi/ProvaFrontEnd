
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoUsuario } from "../../types/tipoUsuario";
 
const URL_API = import.meta.env.VITE_URL_API_USUARIOS;
 
export default function CadUsuario() {
 
  useEffect(() => {
    document.title = "Cadastros de Usuário";
  }, []);
 
  const navigate = useNavigate();
 
  const { handleSubmit, register, formState: { errors, isSubmitting, isValid } } = useForm<TipoUsuario>({ mode: "onChange" });
 
  const onSubmit = async (dados: TipoUsuario) => {
    try {
      await fetch(URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
      });
      alert("Usuário cadastrado!");
      navigate("/login");
 
    } catch (erro) {
      console.error("Erro no cadastro", erro);
      alert("Ocorreu um erro, tente novamente");
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} className="formularios">
        <h1>Crie sua conta sugartalking!</h1>
        <div className="space-y-1">
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
        <div className="space-y-1">
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
        <div className="space-y-1">
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
 
        <div className="space-y-1">
          <label htmlFor="senha" className="block text-sm font-medium">Senha:</label>
          <input
            type="password"
            id="senha"
            {...register("senha", { required: "Informe a senha", minLength: { value: 6, message: "Mínimo 6 caracteres" } })}
            className="inputlogcad"
            placeholder="Digite sua senha..."
          />
          {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
        </div>
 
        <button type="submit" disabled={isSubmitting || !isValid} className="botaoenviar">
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </main>
  );
}