import React from 'react';

import HeadingWithDescription from 'components/molecules/HeadingWithDescription';

const DashboardHome = () => {
  return (
    <div>
      <HeadingWithDescription 
        title='Dashboard'
        description='Welcome, John!'
      />
    </div>
  );
};

export default DashboardHome;