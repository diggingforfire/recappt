import React from "react";
import { connect } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.scss";

const RecipeList = props => (
    <div className="recipe-list">
        <div className="recipe-cards">
            {props.recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
            ))}
        </div>
    </div>
);

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    };
}

export default connect(mapStateToProps)(RecipeList);
