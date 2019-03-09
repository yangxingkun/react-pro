import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
	        <div>
	        		<Switch>
		        		<Route path="/login" component={Login}></Route>
		        		<Route path="/home" component={Home}></Route>
                <Route path="/register" component={Register}></Route>
		        		<Redirect to="/home"/>
	        		</Switch>
	        </div>
        </Router>
      </div>
    );
  }
}

export default App;
