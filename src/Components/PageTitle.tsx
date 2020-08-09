import React from 'react'
import styled from 'styled-components'
import { Title } from '../UI/Typography'

const Wrapper = styled.div`
  display: flex;
`

export default function PageTitle(): JSX.Element {
    return (
        <Wrapper>
            <Title>Broken Brain</Title>
        </Wrapper>
    )
}
