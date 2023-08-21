import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  h1 {
    font-size: 4rem;
    font-weight: 600;

    margin-bottom: 4.3rem;
    text-align: center;
  }

  section {
    display: flex;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 26rem;
    height: 25rem;

    border: 0.3rem solid #e5e5e5;
    border-radius: 4rem;

    cursor: pointer;

    transition: all 200ms;
  }

  button ~ button {
    margin-left: 2.125rem;
  }

  button:hover {
    transform: translateY(-0.9375rem);

    -webkit-box-shadow: -0.0625rem 0.375rem 0.75rem -0.375rem rgba(0, 0, 0, 0.51);
    -moz-box-shadow: -0.0625rem 0.375rem 0.75rem -0.375rem rgba(0, 0, 0, 0.51);
    box-shadow: -0.0625rem 0.375rem 0.75rem -0.375rem rgba(0, 0, 0, 0.51);
  }

  p {
    font-size: 2.2rem;
    font-weight: 600;

    margin-top: 2rem;
  }

  /* Small and Medium devices */
  @media screen and (max-width: 768px) {
    height: 100%;
    padding-bottom: 2rem;

    h1 {
      margin-top: 10%;
      font-size: 2.4rem;
      margin-bottom: 5rem;
    }

    section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    button ~ button {
      margin-left: 0;
      margin-top: 1.875rem;
    }
  }
`;
