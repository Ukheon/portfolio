// eslint-disable-next-line
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { css, styled } from 'styled-components';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const router = useLocation();

    router.hash;

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleCloseToggle = () => {
        setToggle(false);
    };

    const LINK = [
        {
            href: '#about',
            text: 'ABOUT',
        },
        {
            href: '#experience',
            text: 'EXPERIENCE',
        },
        {
            href: '#stacks',
            text: 'STACKS',
        },
        {
            href: '#contact',
            text: 'CONTACT',
        },
    ];

    return (
        <Container>
            <$Logo $toggle={toggle}>PORTFOLIO</$Logo>
            <$Nav>
                <$MenuButton $toggle={toggle} onClick={handleToggle} />
                <$Ul $toggle={toggle}>
                    {LINK.map((link) => {
                        return (
                            <$Li
                                key={link.href}
                                onClick={handleCloseToggle}
                                className={router.hash === link.href ? 'active' : ''}
                            >
                                <a href={link.href}>
                                    <span>{link.text}</span>
                                </a>
                            </$Li>
                        );
                    })}
                </$Ul>
            </$Nav>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    position: fixed;
    top: 0;

    padding: ${({ theme }) => theme.width.sectionPadding};

    width: 100%;
    max-width: ${({ theme }) => theme.width.desktop};
    height: ${({ theme }) => theme.height.header};
    line-height: ${({ theme }) => theme.height.header};

    display: flex;
    justify-content: space-between;

    background-color: white;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
`;

const $Logo = styled.div<{ $toggle: boolean }>`
    font-size: 1.5rem;
    font-weight: 700;

    color: ${({ $toggle }) => ($toggle ? 'white' : 'black')};
`;

const $Nav = styled.nav``;

const MobileMenuButtonCSS = css`
    position: fixed;
    top: 0;
    right: 0;
    background-image: url('./assets/close.png');
    filter: invert();
    background-size: 24px;
    margin-right: 20px;
`;

const $MenuButton = styled.button<{ $toggle: boolean }>`
    z-index: 9999;
    border: none;
    color: black;

    display: none;
    cursor: pointer;

    width: 32px;
    height: ${(props) => props.theme.height.header};
    background-image: url('./assets/m_menu_button.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32px;
    background-color: transparent;
    outline: none;
    border: none;

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
        ${({ $toggle }) => ($toggle ? MobileMenuButtonCSS : '')};
        display: block;
    }
`;

const $Ul = styled.ul<{ $toggle: boolean }>`
    display: flex;
    gap: 10px;
    color: black;

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
        display: ${({ $toggle }) => ($toggle ? 'block' : 'none')};
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.9);
        top: 0;
        left: 0;
        text-align: center;
        padding: 20vh 0;
        line-height: 15vh;
        font-size: 30px;
        a {
            color: white !important;
        }
    }
`;

const $Li = styled.li`
    > a {
        color: black;
        font-size: 1rem;
        font-weight: 700;
    }

    span {
        transition: border-bottom 0.5s ease;
        border-bottom: 2px solid transparent;
    }

    &.active {
        span {
            border-bottom: 2px solid black;
            @media screen and (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
                border-color: white;
            }
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
        &:hover {
            cursor: pointer;
            transition: background-color 0.5s ease;
            background-color: #7b7b7b;
        }
    }
`;
