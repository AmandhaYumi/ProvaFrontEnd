import SugartImg from "../../assets/sugart.jpg"; 
export default function Home() {
  document.title = "Home";

  return (
    <main>
      <h1>Falando com o SugarT :)</h1>

      <img src={SugartImg} alt="SugarT cupcake cantor" style={{ width: "300px", margin: "20px 0" }} />
      <p>Olá! Eu sou o SugarT! Sou um cantor e tenho esse nome porque vim do reino dos doces para espalhar minha doçura enquanto canto por aí. Ouvi dizer que depois de uma certa Sprint vocês andam precisando, não é?
        Sabia que eu fui inventado na Inglaterra? SugarT… Sugar Tea… HAHAHAHA! Falando em Inglaterra, eu já cantei junto com o Pink Floyd, os Beatles, Queen, Rolling Stones, Black Sabbath e muitos outros…
        Rumores dizem que eu quem os ensinei… mas não quero me gabar!
        Espero que eu consiga adoçar seu dia! :)</p>
    </main>
  );
}
