import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 3.125rem;

  p {
    color: var(--text);
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
