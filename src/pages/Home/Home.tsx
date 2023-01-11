import React from 'react';
import { useEffect } from 'react';

const Home: React.FC<any> = ({
  children
}) => {
  
  useEffect(() => {
    document.title += ' | Homepage'
  });

  return (
    <div>
      {children}
    </div>
  );
};

export default Home;