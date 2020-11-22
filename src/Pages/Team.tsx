import React from 'react'
import { Title, ParagraphRegular, TextLink } from '../UI/Typography'
import { fade0, fade1, fade2, fade3 } from '../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock } from '../UI/Containers'

//Assets
import Waveform_01 from '../Assets/Waveform_01.png'

export default function Team(): JSX.Element {
    return (
        <>
            <FadeWrapperBlock
                variants={fade0}
                initial='hidden'
                animate='visible'
            >
                <TextWrapperCenter>
                    <Title>Meet the Team</Title>
                </TextWrapperCenter>
            </FadeWrapperBlock>

            <TextWrapperLeft>
                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <ParagraphRegular>
                        Sammal is a brand new music technology company under the umbrella of Finnish label&nbsp;<TextLink to='https://www.kiekurecords.com/'>Kieku Records</TextLink>.
                        Our goal is to use the cutting edge of modern technology to help
                        human composers unlock their inner potential in ways that have never been possible
                        before. Sammal was created by a&nbsp;<TextLink to='https://www.kiekurecords.com/'>brain trust</TextLink>
                        &nbsp; of musicians, audio engineers, computer
                        scientists and career music industry professionals who have come to the collective realization
                        that technology is inevatibly going to become more and intwined with music creation,
                        and that we need to embrace this rather than fear it.
                    </ParagraphRegular>
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <ParagraphRegular>
                        Sammal is a brand new music technology company under the umbrella of Finnish label
                        &nbsp;<TextLink to='https://www.kiekurecords.com/'>Kieku Records</TextLink>.
                        Our goal is to use the cutting edge of modern technology to help
                        human composers unlock their inner potential in ways that have never been possible
                        before. Sammal was created by a &nbsp;<TextLink to='https://www.kiekurecords.com/'>brain trust</TextLink>
                        &nbsp; of musicians, audio engineers, computer
                        scientists and career music industry professionals who have come to the collective realization
                        that technology is inevatibly going to become more and intwined with music creation,
                        and that we need to embrace this rather than fear it.
                    </ParagraphRegular>
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade3}
                    initial='hidden'
                    animate='visible'
                >
                    <ParagraphRegular>
                        Sammal is a brand new music technology company under the umbrella of Finnish label
                        &nbsp;<TextLink to='https://www.kiekurecords.com/'>Kieku Records</TextLink>.
                        Our goal is to use the cutting edge of modern technology to help
                        human composers unlock their inner potential in ways that have never been possible
                        before. Sammal was created by a &nbsp;<TextLink to='https://www.kiekurecords.com/'>brain trust</TextLink>
                        &nbsp; of musicians, audio engineers, computer
                        scientists and career music industry professionals who have come to the collective realization
                        that technology is inevatibly going to become more and intwined with music creation,
                        and that we need to embrace this rather than fear it.
                    </ParagraphRegular>
                </FadeWrapperBlock>


            </TextWrapperLeft>
        </>
    )
}
