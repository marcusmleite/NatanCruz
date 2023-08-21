import styled from "styled-components";

export const Container = styled.div`
  > main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding-bottom: 8rem;

    /* Big screen */
    @media screen and (min-width: 900px) {
      margin: 4rem auto;

      margin-top: 1.5rem;
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    margin-top: 4rem;
  }
`;
