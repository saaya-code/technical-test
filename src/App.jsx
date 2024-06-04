// App.js
import React from 'react';
import CreateAccount from './components/CreateAccount';
import DeleteAccount from './components/DeleteAccount';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-200 to-blue-200">
      <div className="w-half flex space-x-4">
        <CreateAccount />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default App;
