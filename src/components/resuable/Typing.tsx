// eslint-disable-next-line
import { joinBeforeTextList } from '@/utils/convert';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

type TypingProps = {
    texts: string[];
    speed?: number;
};

const Typing = ({ texts, speed }: TypingProps) => {
    const FIRST_INDEX = 0;
    const TYPING_SPEED = 75;

    const [typingText, setTypingText] = useState('');
    const [charIndex, setCharIndex] = useState(FIRST_INDEX);
    const [index, setIndex] = useState(FIRST_INDEX);

    useEffect(() => {
        const innerTimer = setTimeout(() => {
            if (texts[index]?.length === charIndex) {
                if (index !== texts.length) {
                    setCharIndex(0);
                    setIndex(index + 1);
                    setTypingText(joinBeforeTextList(texts, texts[index].substring(0, charIndex), index));
                }
            } else if (texts.length !== index && texts[index].length !== charIndex) {
                setTypingText(joinBeforeTextList(texts, texts[index].substring(0, charIndex), index));
                setCharIndex(charIndex + 1);
            }
        }, speed || TYPING_SPEED);

        return () => clearTimeout(innerTimer);
    }, [charIndex]);

    return (
        <$P>
            <$Span>{typingText}</$Span>
        </$P>
    );
};

export default Typing;

const $P = styled.p`
    border-right: 5px solid transparent;
`;

const $Span = styled.span`
    white-space: pre-wrap;

    background: linear-gradient(45deg, #000000, #979797, #000000);
    background-clip: text;
    color: transparent;

    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;

    border-right-width: 2px;
    border-right-style: solid;
    border-color: transparent;
    animation: blink-caret 1s 10;

    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: black;
        }
    }
`;
