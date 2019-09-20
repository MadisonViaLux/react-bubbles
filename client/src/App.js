import React, { useState } from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
        
        <Route exxact path='/api/colors' component={BubblePage} />
      </div>
  );
}

export default App;
