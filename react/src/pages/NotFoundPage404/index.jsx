import React from "react";
import { Link } from "react-router-dom";
import { ArrowUUpLeft } from "phosphor-react";

import NotFound from "../../assets/404.svg";

import { Container } from "./styles";

export function NotFoundPage404() {
  return (
    <Container>
      <h1>Página não encontrada!</h1>
      <Link to="/">
        <ArrowUUpLeft size={20} />
        Voltar
      </Link>
      <img
        src={NotFound}
        alt="Imagem que representa que a tela não foi encontrada"
      />
    </Container>
  );
}
