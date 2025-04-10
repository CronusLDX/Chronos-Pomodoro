import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../components/RootLayout/RootLayout';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [],
  },
]);
