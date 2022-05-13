import './App.css';

import Router from './router/router'

// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=89c5bb6f000ff89c6b3bfd1804a55184&hash=d8e15a485cc807f99e27672c604d81c5&limit=100&offset=0

function App() {

  return (
    
    <div className="main">
        <Router />

    </div>
  );
}

export default App;