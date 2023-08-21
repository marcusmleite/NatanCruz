import styled from "styled-components";
import { Popover } from "@mui/material";

// Theme import
import { theme } from "../../styles/theme/default";

const { palette } = theme;

export const Container = styled(Popover)`
  margin-top: 1rem;

  div.MuiPaper-root {
    width: 26rem;
    border-radius: 1.6rem;
    background-color: ${palette.secondary.main};
    color: ${palette.grey[50]};
    z-index: 1;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 16.5rem;

    margin: 0 auto;

    div#popup-module-content {
      > div#module-info {
        margin: 1rem 0;

        p {
          font-weight: bold;
        }

        p + p {
          font-weight: normal;
        }
      }

      footer {
        width: 16.5rem;

        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        button:first-of-type {
          border: 1.5px solid #233295;
          border-bottom: 3px solid #233295;
          margin-bottom: 0.8rem;
        }

        button + button {
          background-color: ${palette.grey[50]};
          color: ${palette.primary.main};
        }
      }
    }
  }

  header {
    display: flex;
    justify-content: end;
    padding: 0 0.5rem;

    svg {
      color: ${palette.grey[50]};
      font-size: 2rem;
    }
  }
`;
