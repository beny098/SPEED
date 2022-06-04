import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        /*
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link class="entryCard" to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
        */
       <div class="bookingtable">
        <table>
            <tbody>
                <tr>
                    <td><Link class="entryCard" to={`/show-book/${book._id}`}>{ book.title }</Link></td>
                    <td>{ book.author }</td>
                    <td>{ book.description }</td>
                    <td>{ book.isbn }</td>
                    <td>{ book.publisher }</td>
                    <td>{ book.published_date }</td>
                </tr>
            </tbody>
        </table>
       </div>
    )
};

export default BookCard;