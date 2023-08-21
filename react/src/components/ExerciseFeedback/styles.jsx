import styled, { css } from "styled-components";

// Theme import
import { theme } from "../../styles/theme/default";

const { palette } = theme;

export const Container = styled.footer`
  /* width: 72rem; */
  padding: 2rem 0;
  padding-bottom: 8rem;

  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  animation: fadeIn 600ms;

  h3 {
    font-size: 2.4rem;
    ${(props) =>
      props.rightAnswer
        ? css`
            color: ${palette.success.main};
            animation: jump 0.5s ease-in-out 8;
          `
        : css`
            color: ${palette.error.main};
          `}
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.8rem;
  }

  button {
    align-self: flex-end;
  }

  /* Big screen */
  @media screen and (min-width: 800px) {
    width: 54rem;
  }

  /* Small screen */
  @media screen and (max-width: 600px) {
    width: 100%;

    p {
      font-size: 1.6rem;
    }
  }

  @keyframes jump {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
