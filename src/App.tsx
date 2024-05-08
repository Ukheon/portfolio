import { routers } from '@/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import '@/styles/font.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={routers} />
        </ThemeProvider>
    );
}

export default App;
