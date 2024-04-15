import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widges from './Widges';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />


      {/* App Body */}
      <div className='app_body'>
      <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
        <Widges/>
      </div>
      
    </div>
  );
}

export default App;
