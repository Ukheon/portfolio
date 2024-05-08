// eslint-disable-next-line
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Assets = ({ assets }: { assets: string[] | undefined }) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (toggle) {
            body!.style.overflow = 'hidden';
            body!.style.marginRight = '17px';
        } else {
            body!.style.overflow = 'auto';
            body!.style.marginRight = '0px';
        }
    }, [toggle]);

    const handleClick = () => {
        setToggle(true);
    };

    const handleClose = (e: React.MouseEvent<HTMLDivElement | HTMLImageElement>) => {
        e.stopPropagation();
        setToggle(false);
    };

    if (!assets) {
        return;
    }
    return (
        <>
            <$ToggleButton onClick={handleClick}>{assets && '사진'}</$ToggleButton>
            <Container onClick={handleClose} className={toggle ? 'show' : 'hide'}>
                <$Assets onClick={(e) => e.stopPropagation()}>
                    <$Close src={'/assets/close.png'} onClick={handleClose} alt="close button" />
                    {assets.map((asset) => {
                        return <$Img key={asset} src={asset} alt="asset image" />;
                    })}
                </$Assets>
            </Container>
        </>
    );
};

export default Assets;
const Container = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.1);

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    &.show {
        display: inline-block;
    }

    &.hide {
        display: none;
    }
`;

const $Assets = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 600px;
    height: auto;
    max-height: 80vh;
    overflow: auto;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    background-color: white;
    margin: 0 30px;
    padding-top: 30px;
    padding-bottom: 10px;

    @media screen and (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
        margin: 0;
        max-width: calc(100% - 40px);
    }
`;

const $Close = styled.img`
    position: fixed;
    top: 0;
    right: 0;

    object-fit: cover;
    width: 40px !important;
    height: 40px;
    padding: 10px;

    background-color: white;
    border-radius: 50%;
    cursor: pointer;
`;

const $Img = styled.img`
    width: 100%;
    padding: 10px;
    object-fit: contain;
    margin-top: 10px;
    margin-bottom: 10px;

    &:not(:last-child) {
        border-bottom: 3px dotted black;
    }
`;

const $ToggleButton = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    margin-left: 5px;
    background-color: whitesmoke;
    border-radius: 5px;
    font-size: 0.825rem;

    padding: 2.5px 5px;

    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e7e7e7;
    }
`;
