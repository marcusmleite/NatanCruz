import styled, { css } from "styled-components";

export const Container = styled.div`
  display: none;

  /* Big screen */
  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: start;

    /* Large */
    max-width: 72rem;

    ${(props) =>
      props.size === "sm" &&
      css`
        max-width: 42rem;
      `}

    ${(props) =>
      props.size === "md" &&
      css`
        max-width: 54rem;
      `}

    width: 100%;

    margin-bottom: 2rem;

    a {
      display: flex;
      align-items: center;

      font-size: 1.5rem;
      color: #121212;

      text-decoration: none;
      transition: all 200ms;

      svg {
        margin-right: 1rem;
      }

      :hover {
        transform: translateX(0.5rem);
        font-weight: bold;
      }
    }
  }
`;
