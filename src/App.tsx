import { RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';

import { publicRouter } from 'navigation/public/routes';
import { publicStore } from 'context/public/publicStore';

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';

import chakraTheme from '@chakra-ui/theme';

const {
  Button
} = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button
  }
});

const App = () => {
  return (
    <Provider store={publicStore}>
      <ChakraBaseProvider theme={theme}>
        <RouterProvider router={publicRouter} />
      </ChakraBaseProvider>
    </Provider>
  );
};

export default App;