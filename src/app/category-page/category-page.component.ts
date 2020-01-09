import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog.service';
import {Blog} from '../model/blog.class';
import {Category} from '../model/category.class';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  posts: Blog[];
  recipes;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getCategory(id).subscribe(category => this.category = category);
    this.blogService.getPostsByCategory(id).subscribe(posts => this.posts = posts);
    this.blogService.getRecipesByCategory(id).subscribe(recipes => this.recipes = recipes);
  }

}
