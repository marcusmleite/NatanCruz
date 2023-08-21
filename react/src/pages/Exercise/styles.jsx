import styled from "styled-components";

export const Container = styled.main`
  max-width: 72rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 3.2rem;
    text-align: center;
    max-width: 42rem;
    margin: 5rem 0;
  }

  > form {
    max-width: 72rem;
    display: flex;
    flex-direction: column;

    button[type="submit"] {
      align-self: flex-end;
      margin-top: 2rem;
      margin-bottom: 10rem;
    }
  }
`;
