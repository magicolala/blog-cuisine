import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Category} from '../model/category.class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  categories: Category[];
  link = 'home';
  tags: string[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    const tags = [];
    this.blogService.getCategories().subscribe(categories => this.categories = categories);
    this.blogService.getPosts().subscribe( posts => {
      posts.forEach( post => {
          post.tags.forEach(tag => {
            tags.push(tag);
            this.tags = [...new Set(tags)];
          });
      });
    });
    this.blogService.getRecipes().subscribe( recipes => {
      recipes.forEach( recipe => {
        recipe.tags.forEach(tag => {
          tags.push(tag);
          this.tags = [...new Set(tags)];
        });
      });
    });
  }
}
