import { Component, OnInit } from '@angular/core';
import {Blog} from '../model/blog.class';
import {BlogService} from '../blog.service';
import {Category} from '../model/category.class';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  link = 'blog';
  posts: Blog[];
  categories: Category[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(blogs => this.posts = blogs);
    this.blogService.getCategories().subscribe(categories => this.categories = categories);
  }

  selectCategory(id: number) {
    this.blogService.getPosts().subscribe(posts => this.posts = posts.filter(post => post.categoryId.includes(id)));
  }

  reset() {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
  }
}
