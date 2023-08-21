import styled from "styled-components";

export const Container = styled.section`
  /* Big screen */
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;

    margin: 4rem auto;

    padding-right: 1.5rem;
  }

  padding-bottom: 10rem;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
`;
