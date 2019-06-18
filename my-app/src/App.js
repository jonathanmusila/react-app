import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Post_form from './components/Post_form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Post_form />
        <hr />
        <Posts />
      </header>
    </div>
  );
}

export default App;
