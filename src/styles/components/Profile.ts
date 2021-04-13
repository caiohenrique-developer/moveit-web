import styled, { css } from 'styled-components';
import { ProfileFormProps } from '../../utils/types/components';

export const FormContainer = styled.form`
  position: relative;

  display: flex;
  align-items: center;

  > section {
    &:nth-of-type(1) {
      img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
      }
    }
    &:nth-of-type(2) {
      margin-left: 1.5rem;

      p {
        font-size: 1rem;
        margin-top: 0.5rem;

        img {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export const Label = styled.label<ProfileFormProps>`
  /* userAvatar */
  ${({ elementSection }) =>
    elementSection === 'userAvatar'
      ? css`
          position: absolute;
          top: 0;

          display: block;

          overflow: hidden;
          width: 5.5rem;
          height: 5.5rem;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            background: ${({ theme }) =>
              theme.dark ? css`var(--white)` : css`var(--white)`};
            border: 4px solid
              ${({ theme }) =>
                theme.dark ? css`var(--blue)` : css`var(--blue)`};
            opacity: 0.2;
            transform: scale(1.3);
          }
        `
      : /* userName */
      elementSection === 'userName'
      ? css`
          display: flex;
          align-items: center;
          justify-content: space-between;

          button {
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 5px;
            border-radius: 5px;

            svg {
            }
          }
        `
      : ''}
`;

export const Input = styled.input<ProfileFormProps>`
  ${({ elementSection }) =>
    /* userAvatar */
    elementSection === 'userAvatar'
      ? css`
          display: none;
        `
      : /* userName */
      elementSection === 'userName'
      ? css`
          display: block;
          width: 100%;
          height: 25px;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--title);
          padding-right: 10px;
          margin-right: 15px;
          background: transparent;
          transition: 0.4s;

          &:focus {
            height: 35px;
            padding: 10px;
            box-shadow: inset 0 0 30px
              ${({ theme }) =>
                theme.dark ? css`var(--boxShadow)` : css`var(--boxShadow)`};
            border: 1px solid
              ${({ theme }) =>
                theme.dark
                  ? css`var(--inputProfileColor)`
                  : css`var(--inputProfileColor)`};
            border-radius: 4px;

            &::-webkit-input-placeholder {
              font-size: 0.75rem;
            } /* Edge */
            &:-ms-input-placeholder {
              font-size: 0.75rem;
            } /* Internet Explorer 10-11 */
            &::placeholder {
              font-size: 0.75rem;
            } /* Default */
          }
          &::-webkit-input-placeholder {
            /* Edge */
            font-size: 0.95rem;
            font-weight: 400;
            color: var(--buttonTitle);
          }
          &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            font-size: 0.95rem;
            font-weight: 400;
            color: var(--buttonTitle);
          }
          &::placeholder {
            /* Default */
            font-size: 0.95rem;
            font-weight: 400;
            color: var(--buttonTitle);
          }
        `
      : ''}
`;
