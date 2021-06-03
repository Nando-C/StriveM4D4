// Create a SingleBook component as a function.
// The component receives a book object as a prop, and displays
// the cover and the title of the book. Use react-bootstrap Cards to display a book
// (The book object can be read from one of the .json
// book files we gave you yesterday).

/* book json can be found in data folder */
import { Card } from "react-bootstrap";
import MyBadge from "./MyBadge";
import { Component } from "react";

// const SingleBook = ({ book }) => {
//   return (
//     <div>
//       <Card>
//         <Card.Img variant="top" src={book.img} style={{height: '300px'}} />
//         <MyBadge text={book.price} color='warning' />
//         <Card.Body>
//           <Card.Title>{book.title}</Card.Title>
//           <Card.Text>
//             {book.category}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default SingleBook;

class SingleBook extends Component {
  state = {
    selected: false
  };
  render() {
    const mystyle = {
      position: "absolute",
      top: "20%",
      right: "0",
    };
    return (
      // <div>
        <Card 
          className='h-100'
          onClick={() => this.setState({selected: !this.state.selected})}
          style={{transform: this.state.selected ? 'scale(0.8)' : 'none'}}
        >
          <Card.Img
            className="w-100"
            variant="top"
            src={this.props.book.img}
            style={{ height: "300px" }}
          />
          <MyBadge
            style={mystyle}
            text={this.props.book.price}
            color="warning"
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
        </Card>
      // </div>
    );
  }
}

export default SingleBook;
