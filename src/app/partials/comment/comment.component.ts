import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Blog} from '../../model/blog.class';
import {BlogService} from '../../blog.service';
import {Recipe} from '../../model/recipe.class';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnChanges {
  @Input() post: Blog;
  @Input() recipe: Recipe;

  constructor(private blogService: BlogService) {}

  ngOnInit() {}

  ngOnChanges() {
  }

  onSubmit(form: NgForm) {
    this.blogService.setComment(form.value);

  }
}
