 
import { styled } from 'styled-components';

const Title = ({ text }: { text: string }) => {
    return <$Title>{text}.</$Title>;
};

export default Title;

const $Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;

    padding-top: 4rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid black;
`;
