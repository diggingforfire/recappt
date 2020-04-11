import React from "react";
import { Route } from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";
import RecipeDetails from "../RecipeDetails/RecipeDetails.js";
import "./App.scss";
import cow from "../../assets/cow-chef.png";

function App() {
    return (
        <div className="app-container">
            <span className="app-title">
                <strong>REC</strong>
                <span>
                    <strong className="faded">APP</strong>
                </span>
                <strong>T</strong>
            </span>

            <Route exact path="/" component={RecipeList} />
            <Route path="/recipe/:id" component={RecipeDetails} />

            <div className="cow">
                <img className="chef" src={cow}></img>
            </div>
        </div>
    );
}

export default App;
