import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  .badgeStatus {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 11.25rem;
    padding: 0.313rem 1.25rem;
    margin: 0 auto 1.25rem;
    background: #49a9ff85;
    border-radius: 3.125rem;
    font-size: 0.5rem;
    text-transform: uppercase;
    border: 2px solid transparent;
    transition: 0.2s;

    &:hover {
      border: 2px solid #4956ffd6;
      -webkit-box-shadow: 0px 0px 4px 3px #4956ffd6;
      box-shadow: 0px 0px 4px 3px #4956ffd6;
    }

    i {
      font-style: normal;
      font-size: 0.8rem;
    }

    strong {
      margin: 0 0.5rem;
      letter-spacing: 0.5rem;
    }
  }

  > section {
    flex: 1;
    gap: 4rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    > div {
      &:last-child {
        display: block;
        height: 100%;
        max-height: 530px;
      }
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    > section {
      display: flex;
      flex-direction: column;
      grid-gap: 4.25rem;
      gap: 4.25rem;

      margin-top: 5rem;
      padding-bottom: 2.5rem;

      > div {
        width: 100%;
      }
    }
  }
`;
