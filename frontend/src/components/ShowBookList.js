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
      .get('https://cise-speed-project.herokuapp.com/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err => {
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if (!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div class="topmenu"></div>
          <div className="row">
            <div class="menu">
              <a class="link">Home</a>
              <a class="link">Moderator</a>
              <a class="link">Analyzer</a>
              <a class="link">Administrator</a>
            </div>
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">SPEED Application</h2>
            </div>

          </div>
          <div class="search">
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search Journal..." class="searchbox"></input>
          </div>

          <div class="toptablepadding"></div>

          <div>
            {bookList}
          </div>

          <div class="toptablepadding"></div>

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