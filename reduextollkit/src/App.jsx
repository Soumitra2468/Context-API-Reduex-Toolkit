import { useState } from 'react';
import './App.css';

import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  const [count, setCount] = useState(0); // Not used yet — remove if unnecessary

  return (
    <UserContextProvider>
      <main className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-6">React Context API + Redux Toolkit</h1>
        <Login />
        <Profile />
      </main>
    </UserContextProvider>
  );
}

export default App;
