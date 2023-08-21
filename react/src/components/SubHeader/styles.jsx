import styled from "styled-components";

// Theme import
import { theme } from "../../styles/theme/default";

export const Container = styled.div`
  max-width: ${(props) => (props.large ? "55rem" : "42rem")};
  width: 100%;

  padding: 2.5rem 2rem;
  border-radius: 1.6rem;

  margin: 0 auto;

  background-color: ${theme.palette.secondary.main};
  color: #f0f0f5;

  h2 {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 900px) {
    min-width: 100%;

    border-radius: 0;

    display: flex;
    flex-direction: column;

    padding: 2.5rem 4rem;
    border-top: 0.2rem solid ${theme.palette.success.dark};
    background-color: ${theme.palette.success.main};
  }

  @media screen and (max-width: 395px) {
    h2 {
      font-size: 1.85rem;
    }
  }
`;
