import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class BookShelves extends Component{
    static propTypes = {
     books: PropTypes.array.isRequired,
     onUpdateBookShelf: PropTypes.func.isRequired
   }
    getBooksBasedOnShelf=(shelf)=>{
        const books = this.props.books;
        return books.filter((book)=> book.shelf === shelf)
    }
    render(){
        return(
             <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <BooksGrid books={this.getBooksBasedOnShelf('currentlyReading')} onUpdateBookShelf={this.props.onUpdateBookShelf}/>
                    </div>
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <BooksGrid books={this.getBooksBasedOnShelf('wantToRead')} onUpdateBookShelf={this.props.onUpdateBookShelf}/>
                    </div>
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <BooksGrid books={this.getBooksBasedOnShelf('read')} onUpdateBookShelf={this.props.onUpdateBookShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/add">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookShelves;