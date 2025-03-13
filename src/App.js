import { Fragment } from "react/cjs/react.production.js";
import { recipes } from "./data.js";
function Recipe({ id, name, ingredients }) {
  return (
    <Fragment>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Recipe
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
          />
        </div>
      ))}
    </div>
  );
}
