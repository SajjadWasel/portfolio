import { Button, Container, Form } from "react-bootstrap";
import './Contact.css';


const Contact = () => {


    const formSubmission = (e) => {
        alert("Form Submitted Successfully")
        e.preventDefault;
    }

    
    return (
        <div className="mt-5">
            <Container className="mt-5">
                <h1 className="coded-heading">
                    &lt;CONTACT/&gt;
                </h1>
                <div className='contact d-flex align-items-center justify-content-between flex-wrap'>
                    <div className='contact-text m-2'>
                        <div className='contact-text-container p-3'>
                            <h1 className='heading'><span className="text_orangered_span" data-aos="zoom-in">Our Services</span></h1>
                            <div className="container">
                                <h5 className='my-5'>Phone: 01234567891</h5>
                                <h5 className='my-5'>Address: 3 No. Road, Mirpur DOHS, Dhaka</h5>
                                <h5 className='my-5'>Email: someone@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <Form onSubmit={() => formSubmission()} className='contact-form w-50 mx-auto p-5 m-5'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type='submit' className='btn-custom'>Submit</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
