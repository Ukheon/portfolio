// eslint-disable-next-line
import { keyframes, styled } from 'styled-components';
import Typing from '../resuable/Typing';
import Accent from '../resuable/Accent';
import Value from './Value';
import Me from './Me';

const Intro = () => {
    return (
        <Container>
            <Me />
            <Value />
        </Container>
    );
};

export default Intro;

const Container = styled.div`
    > p {
        font-size: 1.2rem;
    }
`;
