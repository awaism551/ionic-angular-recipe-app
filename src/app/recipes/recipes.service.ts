// tslint:disable: no-debugger

import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

	private recipes: Recipe[] = [
	{
		id: 'r1',
		title: 'Recipe1',
		imageUrl: 'assets/images/img1.jpg',
		ingredients: ['ing1', 'ing2']
	},
	{
		id: 'r2',
		title: 'Recipe2',
		imageUrl: 'assets/images/img2.jpg',
		ingredients: ['ing1', 'ing2']
	}
	];

	constructor() {}

	getAllRecipes() {
	return [...this.recipes]; // spread operator used here, to ensure we return copy of the original array
	}

	getRecipe(recipeId: string) {
		return {
			...this.recipes.find(recipe => {
			return recipe.id === recipeId;
			})
		};
	}

	deleteRecipe(recipeId: string) {
		this.recipes = this.recipes.filter(recipe => {
			return recipe.id !== recipeId;
		});
		debugger;
		console.log(this.recipes);
	}
}
