import Info from '@/components/contact/Info';
import Title from '@/components/resuable/Title';
import SectionLayout from '@/layout/SectionLayout';

const Contact = () => {
    const ID = 'contact';
    return (
        <SectionLayout id={ID}>
            <Title text="Contact" />
            <Info />
        </SectionLayout>
    );
};

export default Contact;
