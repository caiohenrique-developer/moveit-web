import styled, { css } from 'styled-components';

import { ChallengeButtonProps } from '@utils/types/components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    display: flex;
    align-items: center;
    flex-direction: column;

    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 2px solid var(--border);
  }
  main {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }
    p {
      line-height: 1.5;
    }
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    main {
      strong {
        font-size: 1.5rem;
      }

      img {
        max-width: 100px;
        margin-top: 20px;
      }
      p {
        font-size: 1rem;
        margin-bottom: 20px;
      }
    }
  }
`;

export const ChallengeButton = styled.button<ChallengeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  border: 0;
  border-radius: 5px;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition: 0.2s;
  background: ${({ status }) =>
    status === 'failed'
      ? css`var(--red);`
      : status === 'succeeded'
      ? css`var(--green);`
      : css`var(--grayLine);`};
  &:hover {
    filter: brightness(0.9);
  }
`;
