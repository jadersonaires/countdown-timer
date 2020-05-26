import styled from 'styled-components'

export const Box = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem 0 7rem 0;

    @media (max-width: 680px){
        padding: 1rem 0 2rem 0;
    }
`

export const Item = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
    border-radius: 4px;
    background: rgba(0,0,0, 0.5);
    margin-left: 1rem;

    .number{
        font-size: 5rem;
        font-weight: var(--font-bold);
        color: var(--color-white);
        margin: .4rem;
    }

    footer{
        font-weight: var(--font-light);
        color: var(--color-white);
        margin-bottom: .3rem;
    }

    @media (max-width: 680px){
        .number{
            font-size: 2.5rem;
        }
    }

    @media (max-width: 500px){
        width: 45%;
        margin: 0 0.5rem 1rem .5rem;
    }
`