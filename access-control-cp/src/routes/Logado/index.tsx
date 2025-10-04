import { useEffect, useState } from "react";
import SugartImg from "../../assets/sugart.jpg";
import { Link } from "react-router-dom";
import SugartImg2 from "../../assets/sugart2.png"
import Clica from "../../assets/clique.png"
import DezVezes from "../../assets/dezvezes.png"

export default function Logado() {
  document.title = "Logado";

  const [clickCount, setClickCount] = useState(0);
  const [mostrarEasterEgg, setMostrarEasterEgg] = useState(false);
  const [usuarioNome, setUsuarioNome] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    const contador = clickCount + 1;
    setClickCount(contador);

    if (contador === 10) {
      setMostrarEasterEgg(true);
      setClickCount(0); 

      setTimeout(() => setMostrarEasterEgg(false), 6000);
    }
  };

   useEffect(() => {
  const nome = localStorage.getItem("usuarioNome") || "usuário";
  const email = localStorage.getItem("usuarioEmail") || "seu email";
  setUsuarioNome(nome);
  setEmail(email);
}, []);

  return (
    <main>
      <h1 className="text-center text-2xl font-bold mb-4">
        Olá, {usuarioNome}, eu sou o SugarT!</h1>

      {!mostrarEasterEgg && (
        <img
        src={SugartImg}
        alt="SugarT cupcake cantor"
        onClick={handleClick}
        className="w-[300px] mx-auto my-5 rounded-2xl animate-bounce cursor-pointer active:scale-95 transition-transform"
        style={{ width: "300px", margin: "20px 0" }}
      />
)}
      <img src={Clica} alt="Poster de clique em mim" className="w-[300px] mx-auto my-5 rounded-2xl active:scale-95 transition-transform absolute top-[25%] left-[20%]" style={{ width: "300px", margin: "20px 0" }} />

      <img src={DezVezes} alt="Poster avisando para clicar dez vezes com a bandeira britânica" className="w-[300px] mx-auto my-5 rounded-2xl active:scale-95 transition-transform absolute top-[25%] right-[20%]" style={{ width: "300px", margin: "20px 0" }} />

      {mostrarEasterEgg && (
      <div className="p-5 rounded-2xl shadow-lg max-w-md mx-auto animate-pulse mb-4 text-center">
      <img
      src={SugartImg2}
      alt="Easter Egg"
      className="w-[300px] mx-auto my-5 rounded-2xl animate-bounce"
      />
      <p>
      Surpresa! Você descobriu o meu segredo!
      Estou te mandando um doce abraço açucarado!
      </p>
      </div>
)}

      <p>
        Olá! Eu sou o SugarT! Sou um cantor e tenho esse nome porque vim do
        reino dos doces para espalhar minha doçura enquanto canto por aí. Ouvi
        dizer que depois de uma certa Sprint vocês andam precisando, não é?
        Sabia que eu fui inventado na Inglaterra? SugarT… Sugar Tea…
        HAHAHAHA! Falando em Inglaterra, eu já cantei junto com o Pink Floyd,
        os Beatles, Queen, Rolling Stones, Black Sabbath e muitos outros…
        Rumores dizem que eu quem os ensinei… mas não quero me gabar! Espero
        que eu consiga adoçar seu dia! :)
      </p>

      <p>
        Continuo espalhando minha doçura por aí, tem uma música que combina
        demais comigo: “Sugar Talking” da Sabrina Carpenter! Sempre que escuto,
        sinto minhas notas dançarem e até meus doces preferidos começam a cantar
        junto! HAHAHA Espero que essa música adoce também o seu dia e faça você
        sorrir tanto quanto eu quando canto por aí!
      </p>

     <h2 className="text-center font-bold text-2xl mb-4">
      Sugar Talking - Sabrina Carpenter
     </h2>


      
      <p>
        Ooh-ooh, ooh-ooh-ooh
        Ooh-ooh-ooh-ooh
        Put your loving where your mouth is
        Your sugar talking isn't working tonight, oh
        Put your loving where your mouth is
        Yeah, your paragraphs mean shit to me
        Get your sorry ass to mine
      </p>
      <p>  
        Ooh-ooh, ooh-ooh-ooh
        Ooh-ooh-ooh-ooh
        Saying that you miss me
        Boy, do you win a prize?
        You're havin' these epiphanies
        Big word for a real small mind
        And aren't you tired of saying a whole lot of nothing?
        You tell me that you want me (want me)
        But, baby, if you need me (need me) (yeah)
      </p>
      <p>  
        Put your loving where your mouth is
        Your sugar talking isn't working tonight, oh
        Say you're a big changed man, I doubt it
        Yeah, your paragraphs mean shit to me
        Get your sorry ass to mine
      </p>
      <p>  
        Ooh-ooh, ooh-ooh-ooh
        Ooh-ooh-ooh-ooh
        You filled my whole apartment
        With flowers that died
        The first to open up your wallet
        But the last one to flag, a heart only breaks so many times
        Save your money and stop makin' me cry
        You tell me that you want me (want me) (oh-oh)
        But, baby, if you need me (need me) (yeah)
      </p>
      <p>  
        Oh-oh-oh
        Ooh-ooh, ooh-ooh-ooh
        Ooh-ooh-ooh-ooh
        Put your loving where your mouth is
        Your sugar talking isn't working tonight, oh
        Put your loving where your mouth is
        Yeah, your paragraphs mean shit to me
        It's verbatim what you said last week
        It's your seventh last chance, honey
        Get your sorry ass to mine
      </p>
      <div className="text-center mt-4">
      <Link
        to="/"
        className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
      >
        Não gostou da minha cantoria, {email}? Tá bom :( Saia aqui
      </Link>
      </div>
    </main>
  );
}

