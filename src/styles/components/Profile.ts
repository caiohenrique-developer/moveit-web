import styled, { css } from 'styled-components';

import { ProfileFormProps } from '@utils/types/components';

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

      span {
        position: absolute;
        bottom: -2rem;
        left: 0;

        color: var(--red);
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
  ${({ elementSection, feedbackStatusClass }) =>
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
          transition: 0.4s;

          &:hover {
            background: var(--white);
            opacity: 0.5;
            transform: scale(1.1);
          }

          ${feedbackStatusClass &&
          css`
            border: 2px solid var(--red);
          `}
        `
      : /* userName */
      elementSection === 'userName'
      ? css`
          display: flex;
          align-items: center;
          justify-content: space-between;

          div {
            span {
              display: block;
              width: 0;
              height: 1px;
              background: var(--grayLine);
              transition: 0.8s;
            }

            ${feedbackStatusClass &&
            css`
              input {
                &::-webkit-input-placeholder {
                  color: var(--red);
                } /* Edge */
                &:-ms-input-placeholder {
                  color: var(--red);
                } /* Internet Explorer 10-11 */
                &::placeholder {
                  color: var(--red);
                } /* Default */
              }
              &::-webkit-input-placeholder {
                color: var(--red);
              } /* Edge */
              &:-ms-input-placeholder {
                color: var(--red);
              } /* Internet Explorer 10-11 */
              &::placeholder {
                color: var(--red);
              } /* Default */
            `}
          }

          &:hover div span {
            width: 100%;
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0.313rem;
            margin-left: 1.5rem;
            border-radius: 0.313rem;
            background: #f9aa33;
            color: var(--white);
            transition: 0.6s ease;

            &.errorBtn {
              background: var(--red);
            }
            &.successBtn {
              background: var(--green);
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
          height: 35px;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--title);
          padding-right: 10px;
          background: transparent;
          border: 1px solid transparent;
          transition: 0.6s;

          &:focus {
            padding: 10px;
            box-shadow: inset 0 0 30px var(--boxShadow);
            border-color: var(--inputProfileColor);
            border-radius: 4px;

            &::-webkit-input-placeholder {
              font-size: 0.75rem;
            } /* Edge */
            &:-ms-input-placeholder {
              font-size: 0.75rem;
            } /* Internet Explorer 10-11 */
            &::placeholder {
              font-size: 0.65rem;
            } /* Default */
          }
          &::-webkit-input-placeholder {
            font-size: 0.95rem;
            font-weight: 400;
            color: var(--buttonTitle);
          } /* Edge */
          &:-ms-input-placeholder {
            font-size: 0.95rem;
            font-weight: 400;
            color: var(--buttonTitle);
            transition: 0.6s;
          } /* Internet Explorer 10-11 */
          &::placeholder {
            font-size: 0.95rem;
            font-weight: 400;
            color: var(--buttonTitle);
            transition: 0.6s;
          } /* Default */
        `
      : ''}
`;
