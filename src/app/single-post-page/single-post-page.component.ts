import {Component, OnInit} from '@angular/core';
import {Blog} from '../model/blog.class';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../model/comment.class';
import {Category} from '../model/category.class';
import {Recipe} from '../model/recipe.class';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.scss']
})
export class SinglePostPageComponent implements OnInit {
  post: Blog;
  link = 'blog';
  comments: Comment[];
  category: Category;
  relatedPosts: Blog[];
  relatedRecipes: Recipe[];

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(id).subscribe(post => {
      this.post = post;
      this.blogService.getCategory(post.categoryId).subscribe(category => this.category = category);
      this.blogService.getPostsByCategory(post.categoryId).subscribe(posts => this.relatedPosts = posts);
      this.blogService.getRecipesByCategory(post.categoryId).subscribe(recipes => this.relatedRecipes = recipes);
    });
    this.blogService.getCommentsByPost(id).subscribe(comments => this.comments = comments);
  }

}
