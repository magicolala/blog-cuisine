import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './model/category.class';
import {Blog} from './model/blog.class';
import {Recipe} from './model/recipe.class';
import {Comment} from './model/comment.class';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const baseUrlCategory = 'https://blog-cuisine.firebaseio.com/category';
const baseUrlBlog = 'https://blog-cuisine.firebaseio.com/post';
const baseUrlRecipe = 'https://blog-cuisine.firebaseio.com/recipe';
const baseUrlComment = 'https://blog-cuisine.firebaseio.com/comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrlCategory + '.json', httpOptions);
  }

  getPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(baseUrlBlog + '.json', httpOptions);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(baseUrlRecipe + '.json', httpOptions);
  }

  getPostsByCategory(idCategory): Observable<Blog[]> {
    return this.getPosts().pipe(
      map(posts => posts.filter(post => post.categoryId == idCategory))
    );
  }

  getRecipesByCategory(idCategory): Observable<Recipe[]> {
    return this.getRecipes().pipe(
      map(recipes => recipes.filter(recipe => recipe.categoryId == idCategory))
    );
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(baseUrlCategory + '/' + id + '.json');
  }

  getRecipe(id): Observable<Recipe> {
    return this.http.get<Recipe>(baseUrlRecipe + '/' + id + '.json');
  }

  getPost(id): Observable<Blog> {
    return this.http.get<Blog>(baseUrlBlog + '/' + id + '.json');
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(baseUrlComment + '.json');
  }

  setComment(com: Comment): void {
    let max = 0;
    this.getComments().subscribe(comments => {
      comments.forEach(comment => {
        if (comment.id > max) {
          max = comment.id;
        }
        com.id = max + 1;
      });
      return this.http.patch(baseUrlComment + '/' + com.id + '.json', com, httpOptions).subscribe(() => document.location.reload());
    });
  }

  getCommentsByPost(idPost): Observable<Comment[]> {
    return this.getComments().pipe(
      map(comments => comments.filter(comment => comment.postId == idPost))
    );
  }

  getCommentsByRecipe(idRecipe): Observable<Comment[]> {
    return this.getComments().pipe(
      map(comments => comments.filter(comment => comment.recipeId == idRecipe))
    );
  }

  getPostsByTag(tagSearch: string): Observable<Blog[]> {
    return this.getPosts().pipe(
      map(posts => {
        return posts.filter(elem => elem.tags.includes(tagSearch));
      })
    );
  }

  getRecipesByTag(tagSearch: string): Observable<Recipe[]> {
    return this.getRecipes().pipe(
      map(recipes => {
        return recipes.filter(elem => elem.tags.includes(tagSearch));
      })
    );
  }
}
