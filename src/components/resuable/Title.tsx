// eslint-disable-next-line
import { styled } from 'styled-components';

const Title = ({ text }: { text: string }) => {
    return <$Title>{text}</$Title>;
};

export default Title;

const $Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;

    padding-top: 6rem;
    margin-bottom: 3rem;
    border-bottom: 2px solid black;
`;
