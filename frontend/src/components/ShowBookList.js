import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">SPEED Application</h2>
            </div>
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
                <button type="submit" class="searchButton">
                  <i class="fa fa-search"></i>
              </button>
            </div>
          
            

          </div>

          <div className="list">
                {bookList}
          </div>
          <div className="button">
              <Link to="/create-book" class="addButton">
                + Add New Journal
              </Link>
              <br />
              <br />
            </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;