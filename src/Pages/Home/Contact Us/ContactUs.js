import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Footer from '../../Footer/Footer';

const ContactUs = () => {
  return (
    <>
      <div id="contactUs" className="my-5 bg-light p-4">
        <h2 className="text-info fw-bold">Contact US</h2>
        <div className="d-lg-flex d-sm-block justify-content-around mt-4 ">
          <div>
            <Container>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Container>

          </div>
          <div>
            <h2>Dhaka,Bangladesh</h2>
            <p>Palon,Shariatpur</p>
            <br />
            <h2>+88 01700000000</h2>
            <p>Mon to Fri 99am t0 6pm</p>
            <br />
            <h2>Support@mail.com</h2>
            <p>Send us your query anytime</p>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>

  );
};

export default ContactUs;