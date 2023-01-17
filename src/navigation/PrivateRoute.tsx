import React, { useState } from 'react';

const PrivateRoute: React.FC<any> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  
  if (!isAuth)
    return <><p>This is a private route. Please <a href="/login">sign-in here.</a></p></>

  return <>{children}</>
};

export default PrivateRoute;