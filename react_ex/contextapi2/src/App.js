// App.js

import React from 'react';
import MyFunctionalComponent from './MyFunctionalComponent';
import MyProvider from './MyProvider';

const App = () => {
  return (
    <MyProvider>
      <div>
        <MyFunctionalComponent />
      </div>
    </MyProvider>
  );
};

export default App;