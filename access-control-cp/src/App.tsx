import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import fundoImg from "./assets/fundo1.jpg";

export default function App(){
  return(
    <div 
      className="container"
      style={{
        background: `
          url(${fundoImg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  );
}
