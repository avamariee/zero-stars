import React, { useState } from 'react';
import { Form, Button, Alert, Dropdown } from 'react-bootstrap';

import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

const SignupForm = () => {

  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token);

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='birthday'>Birthday</Form.Label>
          <Form.Control
            type='date'
            placeholder='Your birthday'
            name='birthday'
            onChange={handleInputChange}
            value={userFormData.birthday}
            required
          />
          <Form.Control.Feedback type='invalid'>Required: birthday!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='gender'>Gender</Form.Label>
          <Form.Control
            type='gender'
            placeholder='Your gender'
            name='gender'
            onChange={handleInputChange}
            value={userFormData.gender}
            required
          />
          <Form.Control.Feedback type='invalid'>Required: gender!</Form.Control.Feedback>
        </Form.Group>

{/*         {/*         <Form.Group>
        <Form.Label htmlFor='picture'>Picture</Form.Label> <br/>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" block>
              Gender
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group> 
        <br />

{/* 
        <Form.Group>
          <Form.Label htmlFor='gender'>Gender</Form.Label>
          <Form.Control
            as="select"
          />
          <option>hi</option>
          <option>hello</option>
          <option>bye</option>
          <Form.Control.Feedback type='invalid'>Required: gender!</Form.Control.Feedback>
        </Form.Group> */}

        {/*         <Form.Group>
          <Form.Label htmlFor='picture'>Profile Picture</Form.Label>
          <Form.Control
            type='picture'
            placeholder='Pick an Avatar'
            name='picture'
            onChange={handleInputChange}
            value={userFormData.picture}
            required
          />
          <Form.Control.Feedback type='invalid'>Required: Avatar!</Form.Control.Feedback>
        </Form.Group> */}


        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='outline-warning'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
