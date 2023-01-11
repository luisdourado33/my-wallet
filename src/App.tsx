import { RouterProvider } from 'react-router-dom';
import { publicRouter } from 'navigation/public/routes';
import { Provider } from 'react-redux';

import { publicStore } from 'context/public/publicStore';

const App = () => {
  return (
    <Provider store={publicStore}>
      <RouterProvider router={publicRouter} />
    </Provider>
  );
};

export default App;