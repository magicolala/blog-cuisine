import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog.service';
import {Recipe} from '../model/recipe.class';
import {Comment} from '../model/comment.class';
import {Category} from '../model/category.class';
import {Blog} from '../model/blog.class';

@Component({
  selector: 'app-single-recipe-page',
  templateUrl: './single-recipe-page.component.html',
  styleUrls: ['./single-recipe-page.component.scss']
})
export class SingleRecipePageComponent implements OnInit {
  recipe: Recipe;
  link = 'recipe';
  comments: Comment[];
  categories: Category[] = [];
  relatedRecipes: Recipe[];
  relatedPosts: Blog[];

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
      recipe.categoryId.forEach(idCat => {
        this.blogService.getCategory(idCat).subscribe(category => this.categories.push(category));
      });
      this.blogService.getRecipesByCategory(recipe.categoryId[0]).subscribe(recipes => this.relatedRecipes = recipes);
      this.blogService.getPostsByCategory(recipe.categoryId[0]).subscribe(posts => this.relatedPosts = posts);
    });
    this.blogService.getCommentsByRecipe(id).subscribe(comments => this.comments = comments);
  }

}
