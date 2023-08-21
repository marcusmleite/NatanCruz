import styled from "styled-components";
import { Button as MUIButton } from "@mui/material";

export const Container = styled.div`
  margin-top: 10rem;

  text-align: center;

  > span {
    font-size: 2.4rem;
    line-height: 4.6rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  margin: 10rem 0;
`;

export const Button = styled(MUIButton)`
  width: 11.8rem;

  font-size: 1.8rem;

  border: 2px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  margin-bottom: 0.8rem;
`;

export const BlurContainer = styled(MUIButton)`
  background-color: #e5e5e5;

  width: 11.8rem;
  height: 3.8rem;

  border-radius: 0.6rem;
  border-bottom: 4px solid #e5e5e5;

  margin: 0 1rem;

  border: 2px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
`;
