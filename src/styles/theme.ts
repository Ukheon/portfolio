export const theme = {
    width: {
        desktop: '900px',
        mobile: '600px',
        sectionPadding: '0 20px',
    },
    height: {
        header: '4.5rem',
    },
    mediaQueries: {
        desktop: '900px',
        mobile: '600px',
    },
};

export type width = typeof theme.width;
export type height = typeof theme.height;
export type mediaQueries = typeof theme.mediaQueries;
