import { throttle } from '@/utils/throttle';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { css, styled } from 'styled-components';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const DELAY = 100;

    const handleScroll = throttle(() => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    }, DELAY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            href: '#skill',
            text: 'SKILL',
        },
        {
            href: '#contact',
            text: 'CONTACT',
        },
    ];

    return (
        // <Container className={scrolled ? 'scrolled' : ''}>
        <Container $isScroll={scrolled}>
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

const Container = styled.header<{ $isScroll?: boolean }>`
    position: fixed;
    top: 0;

    z-index: 99999;

    margin-top: 10px;
    border-radius: 10px;

    transition: box-shadow 0.3s ease-in-out;

    padding: ${({ theme }) => theme.width.sectionPadding};

    width: 100%;
    max-width: ${({ theme }) => theme.width.desktop};
    height: ${({ theme }) => theme.height.header};
    line-height: ${({ theme }) => theme.height.header};

    display: flex;
    justify-content: space-between;

    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);

    box-shadow: ${(props) => (props.$isScroll ? '0 0 10px rgba(0,0,0, 0.1)' : '')};
    &.scrolled {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
        margin-top: 0;
        border-radius: 0;
        background-color: white;
        border-bottom: 1px solid black;
    }
`;

const $Logo = styled.div<{ $toggle: boolean }>`
    font-size: 1.5rem;
    font-weight: 700;
    z-index: 9999;

    color: ${({ $toggle }) => ($toggle ? 'white' : 'black')};
    transition: color 0.5s ease-in-out;
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
