import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useObserver = (id: string) => {
    const navigate = useNavigate();

    useEffect(() => {
        const section = document.getElementById(id)!;
        const threshold = Math.floor((window.innerHeight / section?.offsetHeight) * 100) / 100;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navigate('#' + id);
                    }
                });
            },
            { threshold: threshold > 1 ? 1 : threshold, rootMargin: '30px 0px' }
        );

        observer.observe(section!);

        return () => {
            observer.unobserve(section!);
        };
    }, [id]);
};
