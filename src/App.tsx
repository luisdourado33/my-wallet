import { RouterProvider } from 'react-router-dom';
import { publicRouter } from 'navigation/public/routes';

const App = () => {
  return (
    <RouterProvider router={publicRouter} />
  );
};

export default App;