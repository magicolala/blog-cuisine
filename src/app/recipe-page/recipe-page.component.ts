import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {Recipe} from '../model/recipe.class';
import {Category} from '../model/category.class';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  link = 'recipe';
  recipes: Recipe[];
  categories: Category[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getRecipes().subscribe(recipes => this.recipes = recipes);
    this.blogService.getCategories().subscribe(categories => this.categories = categories);
  }

  selectCategory(id: number) {
    this.blogService.getRecipes().subscribe(recipes => this.recipes = recipes.filter(recipe => recipe.categoryId.includes(id)));
  }

  reset() {
    this.blogService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }
}
