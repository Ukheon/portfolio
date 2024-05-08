// eslint-disable-next-line
import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

type IntersectionProps = {
    isIntersecting: boolean;
    children?: ReactNode;
};

const Intersection = ({ children, isIntersecting }: IntersectionProps) => {
    return <React.Fragment>{isIntersecting && children}</React.Fragment>;
};

export default Intersection;
