import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
/**
 * @author @JimmyCSH
 *
 * The App script is used as the main driver of our application.
 * The script creates a route between all the components of the
 * app to communicate and interact with the frontend.
 */
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowBookList} />
          <Route path="/create-book" component={CreateBook} />
          <Route path="/edit-book/:id" component={UpdateBookInfo} />
          <Route path="/show-book/:id" component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
