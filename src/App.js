import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalogue from "./Catalogue";
import axios from 'axios';
import BookDetails from './BookDetails';
// import BookSearcher from './BookSearcher.js';


class App extends Component{
      render() {
        return (
            <Router>
          <div className = "App">
              <header>
                <h1>Hugo Winners Book List</h1>
              </header>
             <Route exact path="/" component={Catalogue}/>
             <Route exact path="/book/:winnerID" component={BookDetails}/> 
             </div>
          </Router>
          
  );
  }
}


export default App;
