import { Router as RemixRouter } from '@remix-run/router/dist/router';
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';

interface RouterBase {
    path: string;
    element: React.ReactNode;
}

const routerData: RouterBase[] = [
    {
        path: '/',
        element: <Root />,
    },
];

export const routers: RemixRouter = createBrowserRouter(
    routerData.map((router) => {
        return {
            path: router.path,
            element: router.element,
        };
    })
);
