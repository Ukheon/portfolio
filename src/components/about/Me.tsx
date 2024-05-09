 
import { styled } from 'styled-components';

const Me = () => {
    return (
        <>
            <$P>
                <$Span>안녕하세요.</$Span>
            </$P>
            <$P>
                <$Span>소프트웨어 엔지니어</$Span>
            </$P>
            <$P>
                <$Span>권욱헌 입니다.</$Span>
            </$P>
        </>
    );
};

export default Me;

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
`;
