import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

function App(){
  return (
    // <HashRouoter>
    //   <Route path="/home" exact={true}>
    //     <h1>Home</h1>
    //   </Route>
    //   <Route path="/home/introduction">
    //     <h1>Introduction</h1>
    //   </Route>
    //   <Route path="/about">
    //     <h1>About</h1>
    //   </Route>
    // </HashRouoter>

    <HashRouter>
      <Navigation />
      <Route pathname="/" component={Home} />
      {/* 해당 path로 가면 About 컴포넌트를 보여줌 */}
      <Route pathname="/about" component={About} />
    </HashRouter>
  );
}

export default App;