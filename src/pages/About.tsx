// eslint-disable-next-line
import Title from '@/components/resuable/Title';
import Typing from '@/components/resuable/Typing';
import SectionLayout from '@/layout/SectionLayout';
import { styled } from 'styled-components';

const About = () => {
    return (
        <SectionLayout id="about">
            <Title text="ABOUT" />
            <Typing texts={['안녕하세요.', '소프트웨어 엔지니어', '권욱헌입니다.']} />
        </SectionLayout>
    );
};

export default About;
