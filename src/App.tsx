import { publicRouter } from 'navigation/public/routes';
import { publicStore } from 'context/public/publicStore';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'config/theme';

const App = () => {
  return (
    <Provider store={publicStore}>
      <ChakraProvider>
        <ThemeProvider>
          <RouterProvider router={publicRouter} />
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default App;