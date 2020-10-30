import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Title, TextWrapper } from '../../UI/Typography'

const TitleLink = styled(Link)`
    display: flex;
    margin: 0 auto;
    text-decoration: none;
`

export default function PageTitle(): JSX.Element {
    return (
        <TextWrapper>
            <TitleLink to='/'>
                <Title>Sammal</Title>
            </TitleLink>
        </TextWrapper>
    )
}
