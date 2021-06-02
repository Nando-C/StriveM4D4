// Create a BookList component. This component receives by
// props a list of books and
// displays them using the SingleBook component.
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
// import SingleBook from "./SingleBook";
class BookList extends Component {
  state = {};
  render() {
    return (
      <Container> 
        <Row className="my-5">
          {this.props.books.map((book) => (
            <Col xs={12} md={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
