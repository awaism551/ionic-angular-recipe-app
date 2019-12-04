import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

	// making recipeItem bindable from outside, i.e where we will use this component
	@Input() recipeItem: Recipe;

	constructor() { }

	ngOnInit() {}

}
