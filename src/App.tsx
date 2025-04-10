import './styles/global.css';
import './styles/theme.css';
import { routes } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
