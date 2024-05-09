export const theme = {
    width: {
        desktop: '900px',
        mobile: '600px',
        sectionPadding: '0 20px',
    },
    height: {
        header: '4.5rem',
        sectionHeight: '9rem',
    },
    mediaQueries: {
        desktop: '900px',
        mobile: '600px',
    },
    color: {
        gray100: '#f2f2f2',
        gray200: '#e2e2e2',
        link: '#0000ee',
        sectionBackground: '#151515',
    },
};

export type width = typeof theme.width;
export type height = typeof theme.height;
export type mediaQueries = typeof theme.mediaQueries;
export type color = typeof theme.color;
