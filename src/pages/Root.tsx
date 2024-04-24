import Header from '@/components/resuable/Header';
import styled from 'styled-components';

const Root = () => {
    return (
        <RootContainer>
            <Header />
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
