import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import App from './App';
import BookDetails from './BookDetails';
// import BookSearcher from './BookSearcher.js';


class Catalogue extends Component{
  constructor() {
    super();
    this.state = {
      winner: {},
      winners: [],
      selection: [],
    }
  }

  componentDidMount() {

    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {

      const newState = [];

      const data = response.val();

      for (let key in data) {

        newState.push(data[key]);
      }
      
      this.setState({
          winners: newState
        }) 
        console.log(this.props)
    })
      };
      
      
      render() {
        return (

            <div>
              <div className="cardCatalogue">
                  {this.state.winners.map((winner) => {
                    return (
                      <div key={winner} className="bookCard">
                        <ul>
                          <li>
                            <Link to={`/book/${winner[0]}`}>
                              <img src={winner[2]} alt={`Book cover for ${winner[0]} by ${winner[1]}}`}></img>
                              <p>{winner[0]}</p> 
                              <p>{winner[1]}</p>
                            </Link>
                          </li>
                        </ul>
                    {/* <p>{winner[3]}</p> */}
                      </div>
                    )
                  })}
                </div>
          

            </div>
      // <BookSearcher books={this.state.books} />
  );
  }
}


export default Catalogue;