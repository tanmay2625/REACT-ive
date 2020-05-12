import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, Collapse, Nav, NavbarToggler, Form, FormGroup, Modal, ModalBody, ModalHeader, Button, Label, Input, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isNavOpen : false,
            isModalOpen : false,
        }
        this.handleLogin=this.handleLogin.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
    }

    ToggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen,
        })
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen,
        })
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
        
    render() {
        return(
        <React.Fragment>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={()=>this.ToggleNav()}/>
                <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem><NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg">Home</span></NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg">About</span></NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg">Contact</span></NavLink></NavItem>
                    </Nav>
                </Collapse>
                <Button className="ml-auto" color="success" onClick={this.toggleModal}><strong>Login</strong></Button>
            </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup row>
                        <Label htmlFor="username" md={2}>Username</Label>
                        <Col md={10}>
                            <Input type="text" name="username" id="username" innerRef={(input)=>this.username=input} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="password" md={2}>Password</Label>
                        <Col md={10}>
                            <Input type="password" name="password" id="password" innerRef={(input)=>this.password=input} />
                        </Col>
                    </FormGroup> 
                    <Col md={{offset:"2" ,size:"10"}}>
                        <FormGroup check>
                            <Input type="checkbox" name="remember" id="remember" innerRef={(input)=>this.remember=input}/>
                            <Label htmlFor="remember">Remember me</Label>
                        </FormGroup>
                    </Col>
                    <Col md={{offset:"2" ,size:"10"}}>
                        <Button color="primary" type="submit" value="submit">Sign in</Button>
                    </Col>
                </Form>
            </ModalBody>
        </Modal>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
        </React.Fragment>
        );
    }
}

export default Header;