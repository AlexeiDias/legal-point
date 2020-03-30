import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: whitesmoke

}

.navbar-brand .navbar-nav .navbar-link  {
    color: whitesmoke;

    &:hover{
        color: white;
    }
}
`;

export default class TopNav extends Component {
    render() {
        return (
            <Styles>
                <Navbar expand='lg' bg="dark" variant="dark">
                   <Navbar.Brand href='/'>Legal Point</Navbar.Brand> 
                   <Navbar.Toggle aria-controls='basic-navbar-nav' />
                   <Navbar.Collapse id='basic-navbar-nav'>
                       <Nav className='ml-auto'>
                           {/* <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item> */}
                           
                           {/* <Nav.Item><Nav.Link href='/specialEv'>Special Events</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/calendar'>Calendar</Nav.Link></Nav.Item> */}
                           {/* <Nav.Item><Nav.Link href='/parentArea'>Login</Nav.Link></Nav.Item> */}
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/legalVideography">Legal Vedeography</NavDropdown.Item>
                                <NavDropdown.Item href="/courtReporters">Court Reporters</NavDropdown.Item>
                                <NavDropdown.Item href="/siteInspection">Site Inspection</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/equipmentRental">Equipament Rental</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Contact" id="basic-nav-dropdown">
                                <NavDropdown.Item href="tel:1-415-705-9104">14156565950</NavDropdown.Item>
                                <NavDropdown.Item href="mailto:littlestart@gmail.com">e-mail</NavDropdown.Item>
                                
                            </NavDropdown>
                            <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                        </Nav>
                   </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}
