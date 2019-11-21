
import React from 'react';



export default function Nav(props) {

    return (
        <>
            <header>
                <nav className="nav_bar">


                    <ul className="list-container">

                        <a className="link" href="http://localhost:3000/"> Home</a>
                        <a className="link" href="https://github.com/reenaishtiaq"> Follow me </a>
                        <a className="link" href="https://github.com/reenaishtiaq/recipe-app"> Like Repo </a>

                    </ul>

                </nav>

                <div className="app_name">

                    <h1>Recipe App</h1>

                </div>

            </header>
        </>
    )
}


