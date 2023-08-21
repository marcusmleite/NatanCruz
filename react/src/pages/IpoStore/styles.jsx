import styled from "styled-components";

import { theme } from "../../styles/theme/default";

const { palette } = theme;

export const Container = styled.div`
  main > div.MuiGrid-root {
    max-width: 42rem;
    margin: 0 auto;

    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    div.MuiGrid-item {
      max-width: 15.2rem;

      /* Small screen */
      @media screen and (max-width: 900px) {
        max-width: 16rem;
      }
    }

    /* Small screen */
    @media screen and (max-width: 900px) {
      width: 100%;
      padding-bottom: 8rem;
    }
  }

  /* Big screen */
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: center;

    margin: 4rem auto;

    main {
      display: flex;
      flex-direction: column;
      align-items: center;

      div.MuiGrid-root {
        max-width: 42rem;
        margin-top: 0.5rem;
      }

      width: 100%;
    }
  }
`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 18rem;
  max-width: 15.2rem;
  width: 100%;

  margin-bottom: 1rem;

  cursor: pointer;

  transition: all 200ms;

  border: 0.1rem solid ${palette.grey[100]};
  border-radius: 1rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    background-color: ${palette.grey[100]};
    width: 100%;

    img {
      height: 5.5rem;
      width: 5.5rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 1rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
      }

      p {
        color: ${palette.grey[50]};
        font-weight: 700;
        margin-left: 0.5rem;
      }
    }
  }

  > footer {
    text-align: center;
    padding: 1rem;

    font-weight: 700;
    color: #121212;
  }

  :hover {
    transform: translateY(-0.5rem);

    -webkit-box-shadow: -0.0625rem 0.375rem 1.5rem -0.5rem rgba(97, 153, 239, 0.8);
    -moz-box-shadow: -0.0625rem 0.375rem 1.5rem -0.5rem rgba(97, 153, 239, 0.8);
    box-shadow: -0.0625rem 0.375rem 1.5rem -0.5rem rgba(97, 153, 239, 0.8);
  }

  @media screen and (max-width: 600px) {
    width: 16.5rem;
  }
`;
