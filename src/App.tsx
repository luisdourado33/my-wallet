import { publicRouter } from 'navigation/public/routes';
import { publicStore } from 'context/public/publicStore';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'config/theme';

const App = () => {
  return (
    <Provider store={publicStore}>
      <ThemeProvider>
        <RouterProvider router={publicRouter} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;