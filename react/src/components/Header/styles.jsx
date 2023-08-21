import styled from "styled-components";
import { Toolbar as MUIToolbar } from "@mui/material";

// Theme import
import { theme } from "../../styles/theme/default";

const { palette } = theme;

export const Toolbar = styled(MUIToolbar)`
  background-color: ${palette.grey[50]};
  padding: 2.1rem 4rem;

  @media screen and (max-width: 900px) {
    background-color: ${palette.success.main};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  margin-right: auto;

  img {
    height: 4.7rem;
    width: 5rem;
    margin-right: 2.5rem;
  }

  h3 {
    font-size: 2rem;
    background-image: linear-gradient(
      to right,
      ${palette.primary.main},
      ${palette.secondary.main}
    );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const UserLoggedContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  div {
    display: flex;
    align-items: center;

    span {
      color: #121212;
      font-size: 1.5rem;
      font-weight: bold;
      margin-left: 1rem;
    }
  }

  div#coins-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div#coins-container > img {
    width: 2.5rem;
    height: 2.5rem;
  }

  div#coins-container > p {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    font-weight: 700;
    color: #121212;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: space-between;

    div {
      span {
        color: #f0f0f5;
      }
    }

    div#coins-container > p {
      color: #f0f0f5;
    }
  }
`;
