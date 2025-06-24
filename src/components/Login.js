// src/components/LoginModal.js
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import SignupModal from '../components/Signup';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

function LoginModal({ show, handleClose }) {
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => {
    handleClose();
    setShowSignup(true);
  };

  const closeSignup = () => setShowSignup(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          <div className="text-center my-3 text-muted">or</div>

          <Button variant="outline-danger" className="w-100 mb-2">
            <FaGoogle className="me-2" /> Continue with Google
          </Button>
          <Button variant="outline-primary" className="w-100 mb-2">
            <FaFacebookF className="me-2" /> Continue with Facebook
          </Button>

          <div className="d-flex justify-content-between mt-3">
            <Button variant="link" className="p-0" onClick={() => alert('Forgot Password clicked')}>
              Forgot Password?
            </Button>
            <Button variant="link" className="p-0" onClick={openSignup}>
              Sign Up
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <SignupModal show={showSignup} handleClose={closeSignup} />
    </>
  );
}

export default LoginModal;
