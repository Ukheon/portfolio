 
import Company from '@/components/experience/Company';
import Project from '@/components/experience/Project';
import Title from '@/components/resuable/Title';
import { useObserver } from '@/hooks/useObserver';
import SectionLayout from '@/layout/SectionLayout';
import { EXPERIENCE_DATA } from '@/static/experience';
import { styled } from 'styled-components';

const Experience = () => {
    const ID = 'experience';
    useObserver(ID);

    return (
        <SectionLayout id="experience">
            <Title text="Experience" />
            {EXPERIENCE_DATA.map((data) => {
                return (
                    <Wrapper key={data.company.name}>
                        <Company data={data.company} />
                        <Container>
                            {data.project?.map((projectData) => {
                                return <Project key={projectData.name} data={projectData} />;
                            })}
                        </Container>
                    </Wrapper>
                );
            })}
        </SectionLayout>
    );
};

export default Experience;

const Wrapper = styled.div`
    display: flex;
    word-break: keep-all;

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.desktop}) {
        flex-direction: column;
        gap: 30px;
    }
    &:not(:last-child) {
        margin-bottom: 30px;
        border-bottom: 1px solid whitesmoke;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
