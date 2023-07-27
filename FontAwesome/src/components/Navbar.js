import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                        <button type="button" onClick={props.myDarkModeFunction} className={`btn btn-${props.mode === 'dark'? 'light':'dark' }`}>Dark</button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = {
    title: "Text"
}