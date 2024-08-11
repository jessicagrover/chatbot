import React from 'react';
import './App.css'; // Import your CSS file
import Chatbot from './Components/Chatbot'; // Import your Chatbot component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Chatbot</h1>
        <Chatbot /> {/* Include the Chatbot component */}
      </header>
    </div>
  );
}

export default App;
