import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SubTitle } from '../../UI/Typography'

const MenuWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 100%;
`

const MenuItem = styled(Link)`
    text-decoration: none;
`

export default function Menu(): JSX.Element {
    return (
        <MenuWrapper>

            <MenuItem to='/music'>
                <SubTitle>Music</SubTitle>
            </MenuItem>

            <MenuItem to='/visuals'>
                <SubTitle>Visuals</SubTitle>
            </MenuItem>

            <MenuItem to='/social'>
                <SubTitle>Social</SubTitle>
            </MenuItem>

        </MenuWrapper>
    )
}
