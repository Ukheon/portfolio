// eslint-disable-next-line
import { keyframes, styled } from 'styled-components';
import Typing from '../resuable/Typing';
import Accent from '../resuable/Accent';

const Intro = () => {
    return (
        <Container>
            <Typing texts={['안녕하세요.', '소프트웨어 엔지니어', '권욱헌입니다.']} />
            <AccentWrapper>
                <Accent text="완벽한 것을 추구하는 것보다 완성하는 것이 더 중요하다." />
            </AccentWrapper>
            <$P>
                위 문장은 제가 중요시하는 가치관입니다.
                <br />
                약속된 기한 내에 서비스를 완성하는 것은 사용자에게 첫 번째로 제공되는 서비스라고 생각합니다.
                <br />
                프로젝트와 일의 경험을 통해 완성의 가치를 최우선으로 여기며,
                <br />
                정해진 마일스톤안에서 가장 안정적인 서비스를 제공하기 위해 최선을 다하고 있습니다.
            </$P>
        </Container>
    );
};

export default Intro;

const initAnimation = keyframes`
	0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

const Container = styled.div`
    > p {
        font-size: 1.2rem;
    }
`;

const AccentWrapper = styled.p`
    opacity: 0;
    animation: ${initAnimation} 1s ease-in-out forwards;
    animation-delay: 2.5s;

    margin-top: 60px;
    margin-bottom: 10px;
`;

const $P = styled.p`
    opacity: 0;
    animation: ${initAnimation} 1.5s ease-in-out forwards;
    animation-delay: 3s;
    line-height: 2rem;
`;
