import React from "react";
import "./RecipeDetails.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const RecipeDetails = props => {
    const recipe =
        props.location.state?.recipe ||
        props.recipes.find(recipe => recipe.id == props.match.params.id);

    return (
        <div className="recipe-details">
            <h1>{recipe.title}</h1>
            <h2>{recipe.subtitle}</h2>
            <div className="container">
                <div className="recipe-info">
                    <div className="servings">
                        <FontAwesomeIcon icon={faUserFriends} />{" "}
                        {recipe.servings}
                    </div>
                    <div className="preparation">
                        <div className="activeTime">
                            <strong>Bereiding:</strong>{" "}
                            {recipe.preparationTime.activeTime} minuten
                        </div>
                        <div className="passiveWaitTime">
                            <strong>Wachttijd passief:</strong>{" "}
                            {recipe.preparationTime.passiveWaitTime} minuten
                        </div>
                        <div className="activeWaitTime">
                            <strong>Wachttijd actief:</strong>{" "}
                            {recipe.preparationTime.activeWaitTime} minuten
                        </div>
                    </div>
                    <div className="ingredients">
                        <strong>Ingrediënten:</strong>{" "}
                        {recipe.ingredients.map(ingredient => (
                            <div key={ingredient.name.singular}>
                                <span>{ingredient.amount.min}</span>{" "}
                                <span>{ingredient.unit}</span>{" "}
                                <span>{ingredient.name.singular}</span>
                                <span>{", "}</span>
                                <span>{ingredient.tags.join(", ")}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="recipe-steps">
                    <h2>Bereiden</h2>
                    {recipe.steps.map(step => (
                        <div key={step.description}>
                            {step.order}. {step.description}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    };
}

export default connect(mapStateToProps)(RecipeDetails);
