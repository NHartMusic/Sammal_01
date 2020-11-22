import React from 'react'
import styled from 'styled-components'

import { Title, TextLink } from '../../UI/Typography'
import { TextWrapperCenter } from '../../UI/Containers'

const TitleLink = styled(TextLink)`
    display: flex;
    margin: 0 auto;
    text-decoration: none;
`

export default function PageTitle(): JSX.Element {
    return (
        <TextWrapperCenter>
            <Title>
                <TitleLink to='/'>
                    Sammal
            </TitleLink>
            </Title>
        </TextWrapperCenter>
    )
}
