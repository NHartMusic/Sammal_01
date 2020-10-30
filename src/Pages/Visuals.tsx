import React from 'react'
import { Title, TextWrapper } from '../UI/Typography'
import { Circle } from '../UI/ScrollElements'
import styled from 'styled-components'

const Test = styled.body`
    width: 100vw;
    height: 300vh;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    background: linear-gradient(180deg, #40f, #05f);
`

export default function Visuals(): JSX.Element {
    return (
        <Test>
            <TextWrapper>
                <Title>Visuals</Title>
                <Circle />
            </TextWrapper>
        </Test>
    )
}
