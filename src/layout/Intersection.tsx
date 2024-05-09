import React, { ReactNode } from 'react';

type IntersectionProps = {
    isIntersecting: boolean;
    children?: ReactNode;
};

const Intersection = ({ children, isIntersecting }: IntersectionProps) => {
    return <React.Fragment>{isIntersecting && children}</React.Fragment>;
};

export default Intersection;
