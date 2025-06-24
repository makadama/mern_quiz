import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Result from './Result';
import Quiz from './Quiz';
import { CheckUserExit, checkUserExit } from '../helper/helper';

/**import components */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <CheckUserExit><Quiz /></CheckUserExit>
  },
  {
    path: '/result',
    element: <CheckUserExit><Result /></CheckUserExit>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
