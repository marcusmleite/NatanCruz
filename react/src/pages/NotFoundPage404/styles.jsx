import styled from "styled-components";

export const Container = styled.main`
  padding: 1rem;

  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
    text-decoration: underline;
    font-weight: bold;
    color: #121212;

    svg {
      margin-right: 1rem;
    }
  }

  img {
    width: 40rem;
    height: 40rem;
  }

  @media screen and (max-width: 768px) {
    a {
      margin: 3rem 0;
    }

    img {
      width: 25rem;
      height: 25rem;
    }
  }
`;
