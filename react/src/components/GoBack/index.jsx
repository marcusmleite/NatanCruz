import { Link } from "react-router-dom";
import { ArrowUUpLeft } from "phosphor-react";

// Styles import
import { Container } from "./styles";

export function GoBack({ to, size }) {
  return (
    <Container size={size}>
      <Link to={to}>
        <ArrowUUpLeft size={20} />
        Voltar
      </Link>
    </Container>
  );
}
