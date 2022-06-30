/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
  if (time === undefined) return "You forgot to set the timer.";
  return time === 0 ? "Lasagna is done." : "Not done, please wait.";
}

export function preparationTime(layers, avgTime = 2) {
  return avgTime * layers.length;
}

export function quantities(layers) {
  let total = { noodles: 0, sauce: 0 };
  for (const layer of layers) {
    if (layer === "noodles") {
      total.noodles += 50;
    } else if (layer === "sauce") {
      total.sauce += 0.2;
    }
  }
  return total;
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList.at(-1);
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portions) {
  const accurateRecipe = { ...recipe };

  // since default recipe is adequate for 2 people
  const accuratePortions = portions / 2;
  for (let ingredients in accurateRecipe) {
    accurateRecipe[ingredients] *= accuratePortions;
  }
  return accurateRecipe;
}
