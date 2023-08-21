import { Container } from "./styles";

export function SubHeader({ title, description, large = false }) {
  return (
    <Container large={large}>
      {!!title && <h2>{title}</h2>}
      {!!description && <p>{description}</p>}
    </Container>
  );
}
