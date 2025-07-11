import React from 'react';
import Users from './components/Users';
import './App.css'
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>RTK Query + React App</h1> 
         <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <Button>Click me</Button>
      {/* <Users />     */}
    </div>
  );
};

export default App;
