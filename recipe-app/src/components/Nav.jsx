
import React, { Component } from 'react';

export default function Nav(props) {

    return (
        <>
            <header>
                <nav className="homepg-nav">
                    <div>
                        <a class="navbar-brand" href="https://madeeasy.com.pk/" title="" rel="home">
                            <span class="icon-logo">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                                <span class="path5"></span>
                                <span class="path6"></span>
                                <span class="path7"></span
                                ><span class="path8"></span>
                            </span>
                        </a>
                    </div>
                    <ul className="list-container">

                        <a className="link" href="google.com"><i className="fas fa-home"></i> Home</a>
                        <a className="link" href="google.com"><i className="fas fa-check-circle"></i> All Recipes </a>
                        <a className="link" href="google.com"><i className="fas fa-thumbs-up"></i> Our Chefs </a>
                        <a className="link" href="google.com" target="_blank"><i className="fas fa-users"></i> Contact Us</a>

                    </ul>
                </nav>

            </header>
        </>
    )
}


