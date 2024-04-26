import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useObserver = (id: string) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const section = document.getElementById(id);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navigate('#' + id);
                        setIsIntersecting(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section!);

        return () => {
            observer.unobserve(section!);
        };
    }, [id]);

    return { isIntersecting };
};
