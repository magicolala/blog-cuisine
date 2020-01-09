import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category.class';
import {Blog} from '../model/blog.class';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog.service';
import {Recipe} from '../model/recipe.class';

@Component({
  selector: 'app-tag-page',
  templateUrl: '../category-page/category-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit {
  category = new Category();
  posts: Blog[];
  recipes: Recipe[];

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    const tag = this.route.snapshot.paramMap.get('tag');
    this.category.name = tag;
    this.blogService.getPostsByTag(tag).subscribe(posts => {this.posts = posts; console.log(posts)});
    this.blogService.getRecipesByTag(tag).subscribe(recipes => this.recipes = recipes);
  }

}
