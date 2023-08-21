import styled, { css } from "styled-components";

// Theme import
import { theme } from "../../styles/theme/default";

const { palette } = theme;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  > h1 {
    font-size: 3.2rem;
    text-align: center;
    max-width: 42rem;
    margin: 5rem 0;
  }

  /* Small screen */
  @media screen and (max-width: 900px) {
    > h1 {
      font-size: 2.4rem;
    }
  }
`;

export const AlternativeContainer = styled.button`
  display: flex;
  align-items: center;

  font-size: 2rem;

  width: 100%;

  padding: 1.3rem 2rem;
  margin-bottom: 1.6rem;

  border: 0.2rem solid ${palette.grey[100]};
  border-radius: 0.6rem;

  cursor: pointer;

  transition: all 200ms;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0.17rem solid ${palette.grey[100]};
    padding: 0.4rem 1rem;
    border-radius: 0.3rem;
    margin-right: 1.6rem;
  }

  /* Active item */
  &${(props) => !props.isActive} {
    color: #f0f2ff;

    ${(props) => {
      if (typeof props.rightAnswer !== "boolean") {
        // Initial
        return css`
          border: 0.2rem solid ${palette.primary.main};
          color: ${palette.primary.dark};

          > div {
            border: 0.17rem solid ${palette.primary.main};
          }
        `;
      }

      // Success answer
      if (props.rightAnswer) {
        return css`
          background-color: ${palette.success.main};
          border: 0.2rem solid ${palette.success.main};

          > div {
            border: 0.17rem solid #f0f2ff;
          }
        `;
      }

      // Wrong answer
      return css`
        background-color: ${palette.error.main};
        border: 0.2rem solid ${palette.error.main};

        > div {
          border: 0.17rem solid #f0f2ff;
        }
      `;
    }}

    > span {
      font-weight: 400;
    }
  }

  /* Small screen */
  @media screen and (max-width: 767px) {
    > div {
      border: 0.17rem solid ${palette.grey[100]};
      padding: 0.2rem 0.5rem;
      border-radius: 0.3rem;
      font-size: 1.6rem;
      margin-right: 1rem;
    }

    > span {
      font-size: 1.6rem;
      max-width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-align: start;
    }

    padding: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 1.8rem;
    padding: 1rem 2rem;
    margin-bottom: 1.2rem;
  }

  /* Big screen */
  @media screen and (min-width: 800px) {
    width: 54rem;

    > span {
      font-size: 1.8rem;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
