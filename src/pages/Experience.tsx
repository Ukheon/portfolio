// eslint-disable-next-line
import Intro from '@/components/about/Intro';
import Title from '@/components/resuable/Title';
import { useObserver } from '@/hooks/resuable/useObserver';
import Intersection from '@/layout/Intersection';
import SectionLayout from '@/layout/SectionLayout';
import { styled } from 'styled-components';

const Experience = () => {
    const ID = 'experience';
    const { isIntersecting } = useObserver(ID);

    return (
        <SectionLayout id="experience">
            <Intersection isIntersecting={isIntersecting}>
                <Title text="EXPERIENCE" />
                <Intro />
            </Intersection>
        </SectionLayout>
    );
};

export default Experience;
