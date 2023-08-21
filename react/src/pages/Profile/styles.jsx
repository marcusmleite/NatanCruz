import styled from "styled-components";

// Theme import
import { theme } from "../../styles/theme/default";

// Component import
import { GoBack } from "../../components/GoBack";

export const GoBackS = styled(GoBack)`
  max-width: 73rem;
  width: 100%;
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 6rem;

  height: auto;

  > header {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem 0;
    margin-bottom: 2rem;

    width: 100%;

    border-bottom: 0.0625rem solid ${theme.palette.grey[100]};

    img {
      width: 4rem;
      height: 4rem;

      margin-right: 2rem;
    }

    span {
      font-weight: 700;
      font-size: 2rem;
      background-image: linear-gradient(to right, #5e80f6, #49bce3);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
`;

export const Container = styled.section`
  padding: 3rem 3.8rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div#user-data {
        margin-left: 1.125rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span {
          font-weight: 700;
        }
      }

      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  div#description {
    margin-top: 2.5rem;
    width: 100%;

    padding-bottom: 4rem;
    margin-bottom: 3rem;

    border-bottom: 0.1rem solid ${theme.palette.grey[100]};
  }

  form {
    max-width: 40rem;
    width: 100%;

    fieldset {
      display: flex;
      flex-direction: column;

      margin-bottom: 2rem;
    }

    div,
    button {
      width: 100%;
    }
  }

  /* Small devices */
  @media screen and (max-width: 768px) {
    margin-top: 0rem;

    header {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      > p {
        display: none;
      }
    }

    div#description {
      margin-top: 3rem;

      padding-bottom: 2rem;
      margin-bottom: 2rem;

      text-align: center;
    }

    form {
      max-width: 100%;
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    border-radius: 0.8rem;

    -webkit-box-shadow: 0rem 0.125rem 0.5625rem -0.125rem rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0rem 0.125rem 0.5625rem -0.125rem rgba(0, 0, 0, 0.23);
    box-shadow: 0rem 0.125rem 0.5625rem -0.125rem rgba(0, 0, 0, 0.23);
  }
`;
