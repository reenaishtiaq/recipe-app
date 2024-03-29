import React from 'react';
import { Link } from "react-router-dom";
import Form from './Form';

const Recipes = props => (

  <div className="container">

    <div className="row">

      {props.recipes.map((recipe) => {

        return (
          <div key={recipe.title} className="col-md-4" style={{ marginBottom: "2.5rem" }}>

            <div className="recipe__box">

              <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />

              <div className="recipe__text">

                <h5 className="recipes__subtitle">{recipe.title}</h5>

                <p className="recipes__subtitle"> Publisher:

                <span> {recipe.publisher} </span>

                </p>

              </div>

              <button className="recipe_buttons">

                <Link to={{
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state: { recipe: recipe.title }
                }}>  Veiw Recipe </Link>

              </button>

            </div>

          </div>
        );

      })}

    </div>

  </div>
);


export default Recipes;