import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
    state = { 
        review: {
            comment: '',
            rate: 'Select Rating',
            elementId: this.props.book.asin
        } 
    }

    inputChange = (e) => {
        // let id = e.target.id
        this.setState({
            review: {
                ...this.state.review,
                [e.target.id]: e.target.value,
            }
        })
    }

    submitReview = async (e) => {
        e.preventDefault()
        console.log(this.state.review)
    }

    render() { 
        return (  
            <>
                <Form className="my-3" onSubmit={(e) => this.submitReview(e)} >
                    <Form.Group className='px-3'>
                        <Form.Control id="comment" as="textarea" rows={3} placeholder="Write a review" onChange={e => this.inputChange(e)}/>
                    </Form.Group>
                    <Form.Group className='px-3'>
                        <Form.Control id="rate" size='sm' as="select"  onChange={e => this.inputChange(e)}>
                            <option>Select Rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button  variant="primary" size='sm' type="submit">
                        Add Review
                    </Button>
                </Form>
            </>
        );
    }
}
 
export default AddComment;