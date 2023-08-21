import styled from "styled-components";

export const Container = styled.article`
  position: -webkit-sticky;
  position: sticky;

  top: 2rem;

  display: flex;
  flex-direction: column;

  max-height: 50rem;
  height: 100%;
  max-width: 37rem;
  width: 100%;

  border: 0.1rem solid #c2c2c2;
  border-radius: 1.6rem;

  header {
    display: flex;
    align-items: center;
    justify-content: start;

    padding: 1.5rem;

    border-bottom: 0.1rem solid #c2c2c2;

    p {
      font-size: 1.8rem;
      color: #121212;
      font-weight: 600;

      margin-left: 1.5rem;
    }
  }

  ul {
    li {
      display: flex;
      align-items: center;

      padding: 0 1.5rem;

      margin-top: 1.5rem;

      div {
        display: flex;
        align-items: center;

        margin-right: auto;
        margin-left: 1.3rem;

        span {
          font-size: 1.4rem;
          color: #121212;
          font-weight: 700;

          margin-left: 1rem;
        }
      }
    }

    /* first placed */
    li:nth-child(1) > p,
    li:nth-child(2) > p {
      color: #219653;
    }

    /* last placed */
    li:nth-child(6) > p,
    li:nth-child(7) > p {
      color: #eb5757;
    }

    li:last-child {
      margin-bottom: 2rem;
    }

    div#promotion-zone,
    div#relegation-zone {
      display: flex;
      justify-content: space-between;
      padding: 0 5rem;

      margin-top: 1.5rem;

      p,
      svg {
        color: #219653;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 700;
      }
    }

    div#relegation-zone {
      p,
      svg {
        color: #eb5757;
      }
    }
  }

  @media screen and (max-width: 375px) {
    ul {
      li {
        padding: 0 1rem;

        div {
          span {
            font-size: 1.3rem;
          }
        }
      }

      div#promotion-zone,
      div#relegation-zone {
        p,
        svg {
          text-align: center;
          font-size: 1.3rem;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    position: static;
    margin-top: 1rem;
    width: 90%;
  }
`;
