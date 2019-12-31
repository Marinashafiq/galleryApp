import React from 'react' ;
import {Navbar , Nav , Form , FormControl , Button} from 'react-bootstrap';
import './Navbar.scss';
import Navigation from '../../containers/navigation/Navigation'
import Search from '../../containers/search/Search';
const NavElement = () => {

    return(
        <Navbar sticky="top"  bg="dark" variant="dark" collapseOnSelect expand="md">
            <Navbar.Brand href="/">Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
               <Navigation />
            </Nav>
            <Form inline>
                <Search />
            </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavElement ;