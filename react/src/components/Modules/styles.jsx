import styled from "styled-components";

export const ModuleContentContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: bold;

  img {
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  p {
    max-width: 20rem;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  :is(:disabled) {
    img {
      cursor: not-allowed;
    }
  }

  /* Small screen */
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

export const Divider = styled.hr`
  border-top: 0.2rem solid #ccc;
  margin: 3rem auto;
  width: 70%;
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
