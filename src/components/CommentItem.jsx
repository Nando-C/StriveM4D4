import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'


class CommentItem extends Component {
    state = {  }
    render() { 
        return (  
            <ListGroup.Item>
                {this.props.comment.comment} - {this.props.comment.rate} stars
            </ListGroup.Item>
        );
    }
}
 
export default CommentItem;