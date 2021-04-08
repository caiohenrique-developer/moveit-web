import styled from 'styled-components';

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
            label {
                position: absolute;
                top: 0;

                display: block;

                overflow: hidden;
                width: 5.5rem;
                height: 5.5rem;
                border-radius: 50%;
                background: transparent;
                cursor: pointer;
                transition: .2s;

                &:hover {
                    background: #000;
                    border: 5px solid #fff;
                    opacity: 0.2;
                }
                input { display: none; }
            }
        }
        &:nth-of-type(2) {
            margin-left: 1.5rem;

            label {
                display: flex;
                align-items: center;
                justify-content: space-between;

                input {
                    display: block;
                    width: 100%;
                    height: 25px;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: var(--title);
                    padding-right: 10px;
                    margin-right: 10px;
                    background: transparent;

                    &::-webkit-input-placeholder { /* Edge */
                        font-size: 1rem;
                        font-weight: 400;
                        color: var(--gray-line);
                    }

                    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                        font-size: 1rem;
                        font-weight: 400;
                        color: var(--gray-line);
                    }

                    &::placeholder { /* Default */
                        font-size: 1rem;
                        font-weight: 400;
                        color: var(--gray-line);
                    }
                }
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 5px;
                    border-radius: 5px;
                    /* background: red; */

                    svg {}
                }
            }
            p {
                font-size: 1rem;
                margin-top: 0.5rem;

                img { margin-right: 0.5rem; }
            }
        }
    }
`