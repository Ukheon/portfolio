// eslint-disable-next-line
import Title from '@/components/resuable/Title';
import SectionLayout from '@/layout/SectionLayout';
import { styled } from 'styled-components';

const Skill = () => {
    const ID = 'skill';
    return (
        <SectionLayout id={ID}>
            <Title text="Skill" />
        </SectionLayout>
    );
};

export default Skill;
