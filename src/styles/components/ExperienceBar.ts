import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 3.125rem;

  span {
    font-size: 1rem;
  }

  > div {
    position: relative;

    flex: 1;

    margin: 0 1.5rem;
    background: var(--grayLine);

    &,
    & > div {
      height: 4px;
      border-radius: 4px;
    }

    > div {
      background: var(--green);
    }
    span {
      position: absolute;
      top: 0.75rem;

      transform: translateX(-50%);
    }
  }
`;
