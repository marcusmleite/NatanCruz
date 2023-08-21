import styled, { css } from "styled-components";

// Theme import
import { theme } from "../../styles/theme/default";

const { palette } = theme;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  max-height: 50rem;
  height: 100%;

  max-width: 20rem;
  width: 100%;

  margin-left: 1.5rem;

  ul > li {
    list-style: none;

    a {
      text-decoration: none;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 1.2rem 2.2rem;
  border: 0.2rem solid ${palette.grey[50]};
  border-radius: 0.6rem;

  width: 19.5rem;

  margin-bottom: 2rem;

  cursor: pointer;

  transition: all 200ms;

  color: #2a2a2a;
  font-weight: bold;

  p {
    margin-left: 2rem;
  }

  :hover {
    border: 0.2rem solid ${palette.primary.main};
    background-color: #5e7ff630;
    color: ${palette.primary.main};
    animation: shake 2.5s forwards;
  }

  ${({ active }) =>
    active &&
    css`
      border: 0.2rem solid ${palette.primary.main};
      background-color: #5e7ff630;
      color: ${palette.primary.main};

      :hover {
        animation: none;
      }
    `}

  @keyframes shake {
    10% {
      transform: scale(1.05) rotate(5deg);
    }
    20% {
      transform: scale(1.05) rotate(-5deg);
    }
    30% {
      transform: scale(1.05) rotate(5deg);
    }
    40% {
      transform: none;
    }
  }
`;
