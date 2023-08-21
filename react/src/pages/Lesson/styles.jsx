import styled from "styled-components";

export const Container = styled.section`
  /* Big screen */
  @media screen and (min-width: 900px) {
    margin: 4rem auto;
  }

  display: flex;
  padding-bottom: 8rem;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    div#go-back {
      display: none;

      @media screen and (min-width: 900px) {
        display: flex;
        align-items: center;
        justify-content: start;

        max-width: 54rem;
        width: 100%;

        margin-bottom: 3rem;

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
    }

    article {
      margin-top: 4rem;

      max-width: 55rem;
      width: 100%;

      div#video > iframe {
        max-width: 55rem;
        width: 100%;

        height: 27rem;

        border-radius: 2rem;
      }

      > img {
        margin: 3rem 0;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;

        width: 100%;
      }

      p {
        font-size: 2.2rem;
        line-height: 3rem;

        margin: 3rem 0;
      }

      /* Mobile */
      @media screen and (max-width: 900px) {
        padding: 0 1rem;
      }
    }

    width: 100%;
  }
`;
