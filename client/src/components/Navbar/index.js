import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

import SignUp from '../SignUp';
import Login from '../Login';
import Auth from '../../utils/auth';
import '../../styles.css'


const AppNav = () => {
    // set modal display state


    const [showModal, setShowModal] = useState(false);



    return (
        <>
            <Navbar className="navbarmobile" expand='lg'>
                <Container fluid>
                    <Navbar.Brand
                        style={{ color: "#EFEA5A" }} className="main-title">
                        Zero Stars  <i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav className='ml-auto'>
                            <Nav.Link className="navbar-title"
                                style={{ color: "#EFEA5A" }}
                                as={Link} to='/'>
                                Home <i class="far fa-star"></i>
                            </Nav.Link>
                            {/* if user is logged in show saved books and logout */}
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link className="navbar-title"
                                        style={{ color: "#EFEA5A" }}
                                        as={Link} to='/profile'>
                                        Profile <i class="far fa-star"></i>
                                    </Nav.Link>
                                    <Nav.Link  className="navbar-title"
                                    style={{ color: "#EFEA5A" }}
                                    onClick={Auth.logout}>Logout <i class="far fa-star"></i></Nav.Link>
                                </>
                            ) : (
                                <Nav.Link className="navbar-title"
                                    style={{ color: "#EFEA5A" }}
                                    onClick={() => setShowModal(true)}>Login/Sign Up <i class="far fa-star"></i></Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* set modal data up */}
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Create Account</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <Login handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUp handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
};

export default AppNav;
