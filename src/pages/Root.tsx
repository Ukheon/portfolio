import Header from '@/components/resuable/Header';

import styled from 'styled-components';
import About from './About';
import Experience from './Experience';
import Skill from './Skill';

const Root = () => {
    return (
        <RootContainer>
            <Header />
            <$Main>
                <About />
                <Experience />
                <Skill />
            </$Main>
        </RootContainer>
    );
};

export default Root;

const RootContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    height: auto;
    max-width: ${({ theme }) => theme.width.desktop};
`;

const $Main = styled.main``;
