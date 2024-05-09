 
import { styled } from 'styled-components';
import { CompanyData } from '@/static/experience';

const Company = ({ data }: { data: CompanyData }) => {
    return (
        <Container>
            <$Name>{data.name}</$Name>
            <$P>{data.position}</$P>
            <$P>{data.period}</$P>
        </Container>
    );
};

export default Company;

const Container = styled.div`
    font-size: 16px;

    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const $Name = styled.h2`
    margin-bottom: 10px;
`;

const $P = styled.p``;
