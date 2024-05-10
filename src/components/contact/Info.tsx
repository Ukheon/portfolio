import { styled } from 'styled-components';

const Info = () => {
    return (
        <div>
            <$Ul>
                <$Li>
                    <span>LOCATION</span>
                    <span>서울 성동구 행당동</span>
                </$Li>
                <$Li>
                    <span>EMAIL</span>
                    <span>
                        <a href="mailto:dnrgjs33@naver.com">dnrgjs33@naver.com</a>
                    </span>
                </$Li>
                <$Li>
                    <span>GITHUB</span>
                    <span>
                        <a href="https://github.com/Ukheon" target="_blank" rel="noreferrer">
                            https://github.com/Ukheon
                        </a>
                    </span>
                </$Li>
            </$Ul>
        </div>
    );
};

export default Info;

const $Ul = styled.ul`
    padding-left: 20px;
`;

const $Li = styled.li`
    font-size: 1.2rem;
    > span:first-child {
        width: 150px;
        max-width: 150px;
        font-weight: 700;
    }

    > span {
        > a {
            color: black;
            text-decoration: underline;
            &:hover {
                color: ${({ theme }) => theme.color.link};
            }
        }
        margin: 10px 0;
        display: inline-block;
    }
    list-style: disc;
`;
