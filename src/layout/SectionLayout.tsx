// eslint-disable-next-line
import React from 'react';
import { styled } from 'styled-components';
const SectionLayout = ({ children, id }: { children?: React.ReactNode; id: string }) => {
    return <SectionContainer id={id}>{children}</SectionContainer>;
};

export default SectionLayout;

const SectionContainer = styled.section`
    width: 100%;
    max-width: ${({ theme }) => theme.width.desktop};

    height: 100%;
    min-height: ${({ theme }) => `calc(100vh - ${theme.height.header})`};

    font-size: 1rem;

    margin: ${({ theme }) => theme.height.header} auto;
    padding: ${({ theme }) => theme.width.sectionPadding};
`;
