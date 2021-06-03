import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
    state = {  
        comment: '',
        rate: 1,
        elementId: ''
    }
    render() { 
        return (  
            <>
                <Form className="my-3">
                    <Form.Group className='px-3' controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Label>Write a review</Form.Label> */}
                        <Form.Control as="textarea" rows={3} placeholder="Write a review" />
                    </Form.Group>
                    <Form.Group className='px-3' controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Rate this book</Form.Label> */}
                        <Form.Control size='sm' as="select">
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