import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/context';
import { makeAuthentication, makeLogoff, selectAuthentication } from 'context/public/authenticationSlice';

const Home: React.FC<any> = ({
  children
}) => {
  const authenticationState = useAppSelector(selectAuthentication);
  const dispatch = useAppDispatch();

  const handleMakeLogin = (): any => dispatch(makeAuthentication());
  const handleMakeLogoff = (): any => dispatch(makeLogoff());

  return (
    <div>
      {authenticationState.isAuthenticated ? 'LOGGED' : 'NOT LOGGED'}
      <button onClick={handleMakeLogin}>Login</button>
      <button onClick={handleMakeLogoff}>Logout</button>
    </div>
  );
};

export default Home;