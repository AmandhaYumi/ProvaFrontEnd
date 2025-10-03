import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Login from "./routes/LogUsuario";
import Cadastro from "./routes/CadUsuario";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },     
      { path: "login", element: <Login /> },   
      { path: "cadastro", element: <Cadastro /> }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

