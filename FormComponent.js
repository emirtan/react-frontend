import React from "react";
import { Button, Form } from "react-bootstrap";
import "./formstyle.css";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FormComponent() {
  return (
    <div>
      <Form class="form">
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Last Name" />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group controlId="formDatePicker">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree the terms" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ minWidth: "100%" }}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent;
