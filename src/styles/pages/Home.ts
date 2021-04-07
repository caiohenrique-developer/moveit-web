import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    > button {
        position: absolute;
        top: 40px;
        left: 40px;
        
        background: transparent;
        color: var(--title);
    }

    > section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-items: center;
        flex: 1;

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
        section {
            display: flex;
            flex-direction: column;
            grid-gap: 4.25rem;
            gap: 4.25rem;

            margin-top: 80px;
            padding-bottom: 2.5rem;

            > div { width: 100%; }
        }
    }
`