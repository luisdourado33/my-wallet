import React, { useEffect } from 'react';

import { useAppSelector } from 'hooks/context';
import { selectAuthentication } from 'context/public/authenticationSlice';

const Home: React.FC<any> = ({
  children
}) => {
  const authenticationState = useAppSelector(selectAuthentication);

  useEffect(() => {
    document.title += ' | Homepage';
    console.log(authenticationState);
  }, [authenticationState]);

  return (
    <div>
      {authenticationState.isAuthenticated ? 'OK' : 'NOT OK'}
    </div>
  );
};

export default Home;