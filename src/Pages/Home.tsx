import React from 'react'
import styled from 'styled-components'
//UI Elements
import { ImageLarge, ImageContainer, fade1, fade2 } from '../UI/Media'
import { SubTitle } from '../UI/Typography'
import { TextWrapperCenter, FadeWrapperFlex } from '../UI/Containers'
import { Circle, CircleWrapper } from '../UI/ScrollElements'
//Assets
import Spectogram_01 from '../Assets/Spectogram_01.png'

export default function Home(): JSX.Element {
    return (
        <>
            <CircleWrapper>
                <Circle />
                <Circle />
                <Circle />
            </CircleWrapper>

            <TextWrapperCenter>
                <FadeWrapperFlex
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <SubTitle>Welcome Home</SubTitle>
                </FadeWrapperFlex>
            </TextWrapperCenter>

            <ImageContainer
                variants={fade1}
                initial='hidden'
                animate='visible'
            >
                <ImageLarge src={Spectogram_01} />
            </ImageContainer>

            
            <a href={require('../Assets/Kieku_Pitch_Deck.pdf')} target="_blank">
                <button>
                    Download the Pitch Here
                </button>
            </a>
                

        </>
    )
}
