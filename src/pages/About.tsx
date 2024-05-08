// eslint-disable-next-line
import Intro from '@/components/about/Intro';
import Title from '@/components/resuable/Title';
import Intersection from '@/layout/Intersection';
import SectionLayout from '@/layout/SectionLayout';

const About = () => {
    const ID = 'about';

    return (
        <SectionLayout id={ID}>
            <Title text="About" />
            <Intro />
        </SectionLayout>
    );
};

export default About;
