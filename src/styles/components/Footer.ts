import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  p {
    padding: 2.6rem;

    color: var(--text);
    text-align: center;
    font-size: min(14px, 3vw);

    a {
      display: inline-block;
      transition: 0.3s;

      &:hover {
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.5),
          0 0 10px rgba(255, 255, 255, 0.5);
      }
    }
  }
`;
