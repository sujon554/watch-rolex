import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


import logo from '../../../images/logo.png'

const Navbar = () => {
    const activeStyle = {
        fontWeight: "bold",
        fontSize: '1.2rem',
        textAlign: 'center',
        color: 'red'
    };

    return (
        <div className='Navbar py-3'>
           
            <Row>
                <Col className="mt-3">
                    <NavLink className="navItem py-5" activeStyle={activeStyle} to="/home"><img
                        alt=""
                        src={logo}
                        width="200"
                        height="30"
                        className="d-inline-block align-top"
                        /></NavLink>
                </Col>
                <Col>
                        <NavLink className="navItem ml-3" activeStyle={activeStyle} to="/home">HOME</NavLink>
                        <NavLink className="navItem" activeStyle={ activeStyle} to="/">SHOP</NavLink>
                        <NavLink className="navItem" activeStyle={ activeStyle} to="/">WATCH</NavLink>
                        <NavLink className="navItem" activeStyle={ activeStyle} to="/">MODELS</NavLink>
                        
                </Col>
           </Row>
        </div>
    );
};

export default Navbar;