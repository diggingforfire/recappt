import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import state from "./state.json";

// const recipes = [];

// for (let i = 1; i <= 10; i++) {
//     recipes.push({
//         id: i,
//         title: "Pasta Carbonara ",
//         servings: 2,
//         ingredients: [
//             {
//                 unit: "grams",
//                 amount: 450,
//                 name: "spinach",
//                 properties: ["deelblokjes diepvries", "nog iets"]
//             },
//             {
//                 unit: "whole",
//                 amount: 1,
//                 name: "ui",
//                 properties: []
//             },
//             {
//                 unit: "intuition",
//                 amount: 1,
//                 name: "salsa sauce",
//                 properties: []
//             }
//         ],
//         shortDescription: "Laura's favoriet",
//         preparationTime: {
//             activeTime: 10,
//             passiveWaitTime: 20,
//             activeWaitTime: 30
//         },
//         totalPreparationTime: 60,
//         steps: [
//             {
//                 description: "Kneed het deeg"
//             },
//             {
//                 description: "Smijt het in de machine"
//             }
//         ],
//         imageUri:
//             "https://static.ah.nl/static/recepten/img_RAM_PRD131045_445x297_JPG.jpg"
//     });
// }

// const state = {
//     recipes: recipes
// };

const store = configureStore(state);

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById("app")
);
