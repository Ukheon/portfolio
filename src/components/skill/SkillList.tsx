// eslint-disable-next-line
import { SkillData } from '@/static/skill';
import { styled } from 'styled-components';

const SkillList = ({ data }: { data: SkillData }) => {
    return (
        <div>
            <$name>
                <b>{data.title}</b>
            </$name>
            <Wrapper>
                {data.contents.map((data) => {
                    return (
                        <Container key={data.name}>
                            <div>
                                <img src={data.image} alt={data.name} />
                            </div>
                            <div>
                                <p>{data.name}</p>
                                <p>{data.info}</p>
                            </div>
                        </Container>
                    );
                })}
            </Wrapper>
        </div>
    );
};

export default SkillList;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.desktop}) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

const Container = styled.div`
    background-color: ${({ theme }) => theme.color.sectionBackground};
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        margin-left: 10px;
    }
    > div > p {
        word-break: keep-all;
        font-size: 1rem;
        line-height: 1.5;
    }

    > div > p:last-child {
        margin-top: 10px;
        font-size: 0.825rem;
    }
`;

const $name = styled.p`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;
