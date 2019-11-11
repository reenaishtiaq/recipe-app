import React, { Component } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import Recipes from './components/Recipes';
import './Nav.css';
import logo from './logo.svg';
import './App.css';

// const APP_ID = "3005204b";
// const APP_KEY =
//   "f205ca6840f7a379247cbed9a694eb27";


const API_KEY = '731dd367ca87f8649a564f647a99554d'; // this key is used

// const API_KEY = "661a3a865a8b1e0be54a9830748c76fa";

// https://www.food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken&count=5

class App extends Component {



  state = {
    recipes: []
  };
  getRecipe = async (e) => {

    const recipeName = e.target.elements.recipeName.value;

    e.preventDefault();


    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();

    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);

  };

  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    if (json === null) {
      return;
    }
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">

        <Nav />
        <h1> Recipe App </h1>

        <Form getRecipe={this.getRecipe} />
        {/* <Recipes recipes={this.state.recipes} /> */}
        {/* {this.state.recipes.map((recipe) => {
          return <p>{recipe.title}</p>
        }
          
          )} */}



      </div>
    );
  };


}
export default App;