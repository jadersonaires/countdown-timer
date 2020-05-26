import React from 'react'
import { Header } from './styled'

const Index = (props) => {
    return (
        <>
            <Header>
                <address>{props.nameDev}</address>
            </Header>
        </>
    )
}

export default Index