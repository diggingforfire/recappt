import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.scss";

const RecipeCard = props => (
    <Link
        className="recipe-card"
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={{
            pathname: "/recipe/" + props.recipe.id,
            state: {
                recipe: props.recipe
            }
        }}
    >
        <div key={props.recipe.title}>
            <div className="recipe-body">
                <div className="card-top">
                    <div className="left">
                        <h2>{props.recipe.title}</h2>
                    </div>
                    <div className="right">
                        <span>{props.recipe.totalPreparationTime}</span>
                    </div>
                </div>
                <div className="card-bottom">
                    <p>{props.recipe.shortDescription}</p>
                </div>
            </div>
        </div>
    </Link>
);

export default RecipeCard;
