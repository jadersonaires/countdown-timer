import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    h1{
        font-size: 4rem;
        font-weight: var(--font-bold);
        color: var(--color-white)
    }

    p{
        font-weight: var(--font-regular);
        color: var(--color-white);
        margin-bottom: 1rem;
    }

    input{
        border-radius: 4px;
        height: 30px;
        background-color: white;
        border: none;
        box-sizing: border-box;
        padding: .4rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 680px){
        h1{
            font-size: 2rem;
        }
    }
`