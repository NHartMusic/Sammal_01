import React from 'react'
import styled from 'styled-components'
//UI Elements
import { ImageLarge, ImageContainer, fade1, fade2 } from '../UI/Media'
import { SubTitle, FadeWrapper } from '../UI/Typography'
import { TextWrapperCenter } from '../UI/Containers'
//components
import brain1 from '../Assets/brain1.jpg'
import { Circle } from '../UI/ScrollElements'

const Test = styled.div`
    display: flex;
    margin: 0 auto;
`

export default function Home(): JSX.Element {
    return (
        <>
            <Test>
                <Circle />
                <Circle />
                <Circle />
            </Test>

            <TextWrapperCenter>
                <FadeWrapper
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <SubTitle>Welcome Home</SubTitle>
                </FadeWrapper>
            </TextWrapperCenter>

            <ImageContainer
                variants={fade1}
                initial='hidden'
                animate='visible'
            >
                <ImageLarge src={brain1} />
            </ImageContainer>

        </>
    )
}
