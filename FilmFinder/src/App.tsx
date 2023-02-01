import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/search';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Search />
    </div>
  );
};

export default App;
