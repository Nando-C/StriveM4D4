import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'

class CommentsList extends Component {
    state = {  

    }
    render() { 
        return ( 
            <ListGroup>
                {this.props.comments && this.props.comments.map(comment => <CommentItem key={comment._id} comment={comment}/>)}
            </ListGroup>
        );
    }
}
 
export default CommentsList