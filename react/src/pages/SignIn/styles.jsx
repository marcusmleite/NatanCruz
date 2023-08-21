import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Container = styled.main`
  height: auto;
  width: 90%;
  max-width: 40rem;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 1.8rem;

    img {
      height: 8.2rem;
      width: 7.8rem;

      margin-bottom: 2rem;
    }

    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  form {
    fieldset {
      display: flex;
      flex-direction: column;

      margin-bottom: 2rem;
    }

    button {
      margin-bottom: 1rem;
    }
  }

  #links {
    display: flex;
    flex-direction: column;
  }

  #links > a,
  #links > p {
    cursor: pointer;

    font-size: 1.4rem;
    text-decoration: underline;
    text-align: center;

    color: #121212;

    margin-top: 2rem;
  }
`;
