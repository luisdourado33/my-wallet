import React, { useState, useEffect } from 'react';

import PublicNavigation from 'navigation/public';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC<any> = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    // check if user is auth
    !isAuth && console.log('User is NOT auth')
  }, []);

  return (
    <PublicNavigation />
  );
};

export default App;