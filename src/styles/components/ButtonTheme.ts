import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  right: 0;

  z-index: 8;
  overflow: hidden;

  background: transparent;
  color: var(--title);
  opacity: 0.2;
  transition: var(--switch-transition-duration);

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  #theme-toggle {
    display: none;

    & + label {
      position: relative;
      z-index: -1;

      font-size: var(--toggle-size);
      display: flex;
      height: var(--switch-h);
      width: var(--switch-w);
      border-radius: calc(var(--switch-h) / 2);
      background-size: auto 8em;
      background-position: bottom;
      background-image: linear-gradient(
        180deg,
        #021037 0%,
        #20206a 19%,
        #4184b1 66%,
        #62e7f7 100%
      );
      transition: var(--switch-transition-duration);
      border: 0.02em solid hsl(207, 30%, 95%);
      overflow: hidden;

      &::after {
        display: block;
        content: '';
        background: #fffad8;
        border-radius: 50%;
        height: var(--switch-h);
        width: var(--switch-h);
        transform: translateX(var(--switch-off-handle-x))
          scale(var(--switch-handle-scale));
        transition: var(--switch-transition-duration);
        box-shadow: 0 0 0.25em 0.0625em #fbee8d, 0 0 2em 0 #ffeb3b,
          inset -0.25em -0.25em 0 0 #fbee8e,
          inset -0.3125em -0.3125em 0 0.625em #fff5b2;
        margin-top: var(--switch-off-handle-x);
      }
    }

    &:checked {
      font-size: var(--switch-font-size);

      & + label {
        background-position: top;
        border-color: hsl(207, 30%, 50%);

        &::after {
          background: transparent;
          transform: translateX(var(--switch-on-handle-x))
            scale(var(--switch-handle-scale));
          box-shadow: inset -0.1875em -0.1875em 0 0 #fbe7ef,
            inset -0.5625em -0.5625em 0 0 #fffff7;
        }
      }
    }
  }
`;
