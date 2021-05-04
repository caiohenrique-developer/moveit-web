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

    width: 180px;
    padding: 5px 20px;
    margin: 0 auto 20px;
    background: #ffc14985;
    border-radius: 50px;
    font-size: 8px;
    text-transform: uppercase;
    border: 2px solid transparent;
    transition: 0.2s;

    &:hover {
      border: 2px solid #ffc149d6;
      -webkit-box-shadow: 0px 0px 4px 3px #ffc149d6;
      box-shadow: 0px 0px 4px 3px #ffc149d6;
    }

    i {
      font-style: normal;
      font-size: 14px;
    }
  }

  > button {
    position: absolute;
    bottom: 40px;
    right: 40px;

    background: transparent;
    color: var(--title);
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

      margin-top: 80px;
      padding-bottom: 2.5rem;

      > div {
        width: 100%;
      }
    }
  }
`;
