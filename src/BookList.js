import React, {Component} from 'react'

function ListItem(props) {
  const backgroundImage = props.value.imageLinks.thumbnail;
  const bookTitle = props.value.title;
  const bookAuthors = props.value.authors;
  return <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${backgroundImage})` }}></div>
                <div className="book-shelf-changer">
                    <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthors}</div>
            </div>
        </li>;
}

function BookListItems(props) {
  const books = props.books;
  const listItems = books.filter((book)=>book.shelf===`${props.filter}`).map((book) =>
    <ListItem key={book.title.toString()}
              value={book} />
  );
  return (
    <ol className="books-grid">
      {listItems}
    </ol>
  );
}

class BookList extends Component{
    render(){
        const books = this.props.books;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                 <div className="bookshelf-books">
                    <BookListItems books={books} filter='currentlyReading'/>
                 </div>
                <h2 className="bookshelf-title">Want to Read</h2>
                 <div className="bookshelf-books">
                    <BookListItems books={books} filter='wantToRead'/>
                 </div>
                <h2 className="bookshelf-title">Read</h2>
                 <div className="bookshelf-books">
                    <BookListItems books={books} filter='read'/>
                 </div>
            </div>
        )
    }
}

export default BookList;