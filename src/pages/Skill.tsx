// eslint-disable-next-line
import Title from '@/components/resuable/Title';
import SkillList from '@/components/skill/SkillList';
import SectionLayout from '@/layout/SectionLayout';
import { SKILL_DATA } from '@/static/skill';
import { styled } from 'styled-components';

const Skill = () => {
    const ID = 'skill';
    return (
        <SectionLayout id={ID}>
            <Title text="Skill" />
            <Container>
                <SkillList data={SKILL_DATA.frontend} />
                <SkillList data={SKILL_DATA.devOps} />
            </Container>
        </SectionLayout>
    );
};

export default Skill;

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;

    gap: 30px;
`;
