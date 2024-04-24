import 'styled-components';
import { width, height } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        width: width;
        height: height;
    }
}
