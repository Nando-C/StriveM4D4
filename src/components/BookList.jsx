// Create a BookList component. This component receives by
// props a list of books and
// displays them using the SingleBook component.
import { Component } from "react";
import SingleBook from "./SingleBook";
// import SingleBook from "./SingleBook";
class BookList extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.books.map((book) => (
          <div key={book.asin}>
            <SingleBook book={book} />
          </div>
        ))}
      </div>
    );
  }
}

export default BookList;
