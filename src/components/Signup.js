// src/components/SignupModal.js
import { Modal, Button, Form } from 'react-bootstrap';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

function SignupModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="signupName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="signupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="signupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>

        <div className="text-center my-3 text-muted">or</div>

        <Button variant="outline-danger" className="w-100 mb-2">
          <FaGoogle className="me-2" /> Sign up with Google
        </Button>
        <Button variant="outline-primary" className="w-100 mb-2">
          <FaFacebookF className="me-2" /> Sign up with Facebook
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default SignupModal;
