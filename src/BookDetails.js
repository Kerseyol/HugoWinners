import React, { Component } from 'react';
import firebase from './firebase';
import App from './App';
import './App.css';
import Catalogue from './Catalogue';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BookDetails extends Component {
    constructor() {
        super();
        this.state = {
            selection: [],
            winner: []
        }
    }

    
    componentDidMount() {
        console.log("why is this not working?")
        console.log(this.props.match.params.winnerID)
        
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {

      const newState = this.props.match.params.winnerID;

      const winner = [];
      
      const winners = [];
      
      const data = response.val();
      
      for (let key in data) {
          
          winners.push(data[key]);
          
        }
        console.log(data)
        // const selection = winners.find(element[{}]);

    });

    // const selection = winners.find(Element => {this.props.match.params.winnerID})
    // console.log(selection)
}

render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <div className="largeCover">
                        <div className="description">
                            <h1>Hello</h1>
                            {/* <h1>{winner[0]}</h1> */}
                            {/* <h2>by {winner[1]}</h2> */}
                        </div>

                        <div className="image">
                            {/* <img src={winner[2]} alt={`${winner[0]} by ${winner[1]}`}/> */}
                        </div>
                    </div>
                </div>
                );
                )
                )
            </div>
        )
    }



};

export default BookDetails;