import { Title } from "@/components/Title";
import { useObserver } from "@/hooks/useObserver";
import { SectionLayout } from "@/layouts/SectionLayout";
import { initAnimation } from "@/styles/animation";
import styled from "styled-components";

export const ContactPage = () => {
	const { isIntersection } = useObserver("contact");

	return (
		<div>
			<SectionLayout id='contact' height={"70vh"}>
				<Title title={"CONTACT"} />
				<ContactSection hidden={!isIntersection}>
					<p>
						<span>LOCATION</span> 서울시 성동구
					</p>
					<p>
						<span>EMAIL</span> dnrgjs33@gmail.com
					</p>
					<p>
						<span>GITHUB </span> https://github.com/Ukheon
					</p>
					<p>
						<span>PHONE </span> 010.7323.1620
					</p>
				</ContactSection>
			</SectionLayout>
		</div>
	);
};

const ContactSection = styled.section`
	animation: ${initAnimation} 1.5s forwards;
	background-repeat: no-repeat;
	background-color: transparent;
	position: relative;
	width: 100%;
	overflow-x: hidden;
	overflow-y: hidden;
	align-items: center;
	> p {
		background-color: transparent;
		background-image: none;
		background-size: cover;
		height: 50px;
		line-height: 50px;
		position: relative;
		padding-left: 30px;
		> span {
			width: 110px;
			display: inline-block;
		}
		&::before {
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			left: 0;
			margin-right: 20px;
			content: "";
			width: 5px;
			height: 5px;
			background-color: white;
		}
	}
`;
