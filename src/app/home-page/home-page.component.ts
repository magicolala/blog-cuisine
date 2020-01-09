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
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getCategories().subscribe(categories => this.categories = categories);
  }

}
