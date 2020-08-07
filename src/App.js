import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import axios from 'axios';
import imageImports from './imageImports';
// import BookSearcher from './BookSearcher.js';


class App extends Component{
  constructor() {
    super();
    this.state = {
      // book: {},
      // books: [],
      // title: "",
      // imagePath: {},
      winners: [],
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

      console.log(response.val());
    })

    // axios({
    //   url: 'https://www.googleapis.com/books/v1/volumes/1lK3xA72adAC',
    //   method: 'GET',
    //   responseType: 'json',
    //     params: {
    //       key: 'AIzaSyD4AXfd-_aY-1us7ev4BmN6OwDi9TP3Y0Q'
    //     }
    // }).then( (response) => {
      
    //   // this.setState({
    //   //   book: response.data.volumeInfo,
    //   //   books: response.data,
    //   //   title: response.data.volumeInfo.title,
    //   //   imagePath: response.data.volumeInfo.imageLinks.thumbnail,
    //   // })
    //       // const book = response.data.volumeInfo
    //       // const title = response.data.volumeInfo.title 
    //       // books.push(response.data.volumeInfo);
    //     });
      };
      
      
      render() {
        // console.log(this.state);
        return (
          <div>
            <div className="cardCatalogue">
              {/* <p>{this.state.title}</p>
              <img src={this.state.imagePath}></img> */}
                {this.state.winners.map((winner) => {
                  return (
                    <div className="bookCard">
                      <ul>
                        <li>
                          <img src={winner[2]}></img>
                          <p>{winner[0]}</p> 
                          <p>{winner[1]}</p>
                        </li>
                      </ul>
                  <p>{winner[4]}</p>
                    </div>
                  )
                })}
              </div>
        

      </div>
      // <BookSearcher books={this.state.books} />
  );
  }
}


export default App;
