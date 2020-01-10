import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../model/category.class';
import {Blog} from '../model/blog.class';
import {Recipe} from '../model/recipe.class';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-search-page',
  templateUrl: '../category-page/category-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  category = new Category();
  posts: Blog[];
  recipes: Recipe[];
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    const search = this.route.snapshot.paramMap.get('search');
    this.category.name = search;
    this.blogService.getPostsBySearch(search).subscribe(posts => this.posts = posts);
    this.blogService.getRecipesBySearch(search).subscribe(recipes => this.recipes = recipes);
  }
}
