
import React, { Component } from 'react';

export default function Nav(props) {

    return (
        <>
            <header>
                <nav className="nav_bar">
                
                    <ul className="list-container">

                        <a className="link" href="google.com"><i className="fas fa-home"></i> Home</a>
                        <a className="link" href="google.com"><i className="fas fa-check-circle"></i> All Recipes </a>
                        <a className="link" href="google.com"><i className="fas fa-thumbs-up"></i> Our Chefs </a>
                        <a className="link" href="google.com" target="_blank"><i className="fas fa-users"></i> Contact Us</a>

                    </ul>

                </nav>

                <div className="app_name">
                    
                    <h1>Recipe App</h1>

                </div>

            </header>
        </>
    )
}


