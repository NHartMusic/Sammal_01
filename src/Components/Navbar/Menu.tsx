import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SubTitle, MenuLink } from '../../UI/Typography'


const MenuWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 100%;
`


export default function Menu(): JSX.Element {
    return (
        <MenuWrapper>

            <SubTitle>
                <MenuLink to='/about'>About</MenuLink>
            </SubTitle>

            <SubTitle>
                <MenuLink to='/products'>Products</MenuLink>
            </SubTitle>

            <SubTitle>
                <MenuLink to='/team'>Team</MenuLink>
            </SubTitle>

            <SubTitle>
                <MenuLink to='/connect'>Connect</MenuLink>
            </SubTitle>

        </MenuWrapper>
    )
}
