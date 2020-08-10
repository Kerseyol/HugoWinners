import React, { Component } from 'react';
import firebase from './firebase';
import App from './App';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BookDetails extends Component {
    constructor() {
        super();
        this.state = {
            selection: {},
            winner: []
        }
    }

    
  componentDidMount() {

    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {

      const newState = [];

      const winner = [];

      const data = response.val();

      for (let key in data) {

        newState.push(data[key]);

      };

      this.setState({
        winner: newState
      })

    });
};

    render() {
        // console.log(winner);
        return (
            <div>
                {this.state.winner.map((winner) => {
                    return (
                        <div key={winner} className="bookCard">
                            <ul>
                            <li>
                                <Link to={`/book/${winner[0]}`}>
                                <img src={winner[2]} alt={`Book cover for ${winner[0]}`}></img>
                                <p>{winner[0]}</p> 
                                <p>{winner[1]}</p>
                                </Link>
                            </li>
                            </ul>
                            <p>{winner[3]}</p>
                            
                            <div className="largeCover">
                                <div className="description">
                                    <h1>{this.state.winner[0]}</h1>
                                    <h2>{this.state.winner[1]}</h2>
                                    <p>{this.state.selection[0]}</p>
                                </div>
                                <div className="image">
                                    <img src={winner[2]} />
                                </div>
                            </div>
                        </div>
                        );
                        })
                    }
            </div>
        )
    }



};

export default BookDetails;