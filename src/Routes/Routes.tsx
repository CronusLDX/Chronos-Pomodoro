import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../components/RootLayout/RootLayout';
import { About } from '../pages/About-pomodoro/About';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/about-pomodoro',
        element: <About />,
      },
    ],
  },
]);
