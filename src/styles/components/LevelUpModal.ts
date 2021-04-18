import styled from 'styled-components';

export const Container = styled.div`
  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }
  strong {
    font-size: 2.25rem;
    color: var(--title);
  }
  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }
  button {
    position: absolute;
    top: 1rem;
    right: 1rem;

    border: 0;
    font-size: 0;
    padding: 5px;
    transition: 0.3s;
    border-radius: 50%;
    background: transparent;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 90%;

    p {
      font-size: 1.1rem;
    }
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    button:hover {
      transform: rotate(360deg);
    }
  }
`;
