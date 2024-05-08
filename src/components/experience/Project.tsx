import { ProjectData } from '@/static/experience';
import { styled } from 'styled-components';
import Assets from './Assets';

const Project = ({ data }: { data: ProjectData }) => {
    return (
        <Wrapper>
            <$Name>
                {data.name}{' '}
                {data.link && (
                    <$Anchor href={data.link} target="_blank">
                        Link
                    </$Anchor>
                )}
            </$Name>
            <$Description>
                <p>
                    <b>설명 :</b>
                    <span>{data.description}</span>
                </p>
                <p>
                    <b>팀원 :</b>
                    <span>{data.team}</span>
                </p>
                <p>
                    <b>기간 :</b>
                    <span>{data.period}</span>
                </p>
                <p>
                    <b>기술 :</b>
                    <span>{data.skill}</span>
                </p>
            </$Description>
            <Container>
                {data.contents?.map((content) => {
                    return (
                        <Contents key={content.text}>
                            {content.text}
                            <Assets assets={content.assets} />
                            {content.children?.map((childrenText) => {
                                return (
                                    <Container key={childrenText}>
                                        <Contents className={'children'}>{childrenText}</Contents>
                                    </Container>
                                );
                            })}
                        </Contents>
                    );
                })}
            </Container>
        </Wrapper>
    );
};

export default Project;

const Wrapper = styled.div`
    max-width: ${({ theme }) => theme.width.desktop};
    margin-bottom: 4rem;
`;

const $Name = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

const $Anchor = styled.a`
    font-size: 1rem;
    padding: 0 5px;
    text-decoration: underline;
    color: #0000ee;

    transition: color 0.3s ease, text-decoration-color 0.3s ease;
`;

const $Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 5px;

    > p {
        display: flex;
        > b {
            min-width: 40px;
        }
    }
`;

const Container = styled.ul`
    padding-left: 20px;
    list-style-position: inside;
`;
const Contents = styled.li`
    list-style: disc;
    line-height: 2;

    &.children {
        list-style: circle;
    }
`;
