import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>   
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link  className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                </div>

                <div className="d-flex">
                    <div className="bg-dark rounded mx-4" onClick= {() => {props.enableDarkMode("dark")}} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}} ></div>
                    <div className="bg-primary rounded mx-4" onClick= {() => {props.enableDarkMode("primary")}} style={{height: '30px', width: '30px', cursor: 'pointer' }} ></div>
                    <div className="bg-danger rounded mx-4" onClick= {() => {props.enableDarkMode("danger")}} style={{height: '30px', width: '30px', cursor: 'pointer'}} ></div>
                    <div className="bg-success rounded mx-4" onClick= {() => {props.enableDarkMode("success")}} style={{height: '30px', width: '30px', cursor: 'pointer'}} ></div>
                    <div className="bg-warning rounded mx-4" onClick= {() => {props.enableDarkMode("warning")}} style={{height: '30px', width: '30px', cursor: 'pointer'}} ></div>
                </div>
                
                
                {/* <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick= {() => {props.enableDarkMode(null)}}  />
                    <label className={`form-check-label ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                </div> */}
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Set title here",
    about: "About"
};
