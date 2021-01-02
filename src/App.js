
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Demo1 from "./components/demo1";
import Demo2 from "./components/demo2";

function App() {
  return (
    <div >


      <Router>

        <div className="container">
          <div className="row m-5">
            <div className="col-md-4" ><Link to="/">Demo 1</Link></div>

            <div className="col-md-4" ><Link to="/demo2">Demo 2 - Kontextus</Link></div>
          </div>
        </div>

        <div >



          <Switch>
            <Route exact path='/' component={Demo1}></Route>
            <Route exact path='/demo2' component={Demo2}></Route>

          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
