// eslint-disable-next-line
import Intro from '@/components/about/Intro';
import Title from '@/components/resuable/Title';
import { useObserver } from '@/hooks/resuable/useObserver';
import Intersection from '@/layout/Intersection';
import SectionLayout from '@/layout/SectionLayout';

const About = () => {
    const ID = 'about';
    const { isIntersecting } = useObserver(ID);

    return (
        <SectionLayout id={ID}>
            <Intersection isIntersecting={isIntersecting}>
                <Title text="ABOUT" />
                <Intro />
            </Intersection>
        </SectionLayout>
    );
};

export default About;
