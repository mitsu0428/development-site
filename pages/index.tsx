import React from 'react'
import styled from 'styled-components'

function HomePage() {
    return (
        <Container>
            <DefaultTitle>Welcome to Hello</DefaultTitle>
            <DefaultText>これからいい感じのページになっていくよ!</DefaultText>
        </Container>
    )
}

export default HomePage

const Container = styled.div`
    width: 100%;
`

const DefaultTitle = styled.h1`
    font-size: 64px;
`

const DefaultText = styled.p`
    font-size: 32px;
`
