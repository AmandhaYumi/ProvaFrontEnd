import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/Error";
import Login from "./routes/Home";      
import Cadastro from "./routes/CadUsuario"; 
import Logado from "./routes/Logado";    
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },      
      { path: "login", element: <Login /> },    
      { path: "cadastro", element: <Cadastro /> },
      { path: "logado", element: <Logado /> }   
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


