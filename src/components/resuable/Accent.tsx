// eslint-disable-next-line
import { styled } from 'styled-components';

const Accent = ({ text }: { text: string }) => {
    return <$Span>{text}</$Span>;
};

export default Accent;

const $Span = styled.span`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;

    background: linear-gradient(to top, #ffff00 50%, transparent 50%);
`;
