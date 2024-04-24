import 'styled-components';
import { width, height, mediaQueries } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        width: width;
        height: height;
        mediaQueries: mediaQueries;
    }
}
