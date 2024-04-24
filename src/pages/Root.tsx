import styled from 'styled-components';

const Root = () => {
    return (
        <RootContainer>
            <div>안녕하세요</div>
        </RootContainer>
    );
};

export default Root;

const RootContainer = styled.main`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.width.desktop};
`;
