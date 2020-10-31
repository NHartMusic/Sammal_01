import React from 'react'
import { Title, ParagraphRegular, FadeWrapper } from '../UI/Typography'
import { fade2 } from '../UI/Media'
import { TextWrapperCenter, TextWrapperLeft } from '../UI/Containers'

export default function About(): JSX.Element {
    return (
        <>
            <TextWrapperCenter>
                <Title>About</Title>
            </TextWrapperCenter>
            <TextWrapperLeft>

                <FadeWrapper
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <ParagraphRegular>
                        Sammal is a brand new music technology company under the umbrella of Finnish label
                        Kieku Records. Our goal is to use the cutting edge of modern technology to help
                        human composers unlock their inner potential in ways that have never been possible
                        before.
                </ParagraphRegular>
                </FadeWrapper>


            </TextWrapperLeft>
        </>
    )
}
