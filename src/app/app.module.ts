import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './partials/nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { FooterComponent } from './partials/footer/footer.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { LoaderComponent } from './partials/loader/loader.component';
import { SingleRecipePageComponent } from './single-recipe-page/single-recipe-page.component';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';
import { CommentComponent } from './partials/comment/comment.component';
import {FormsModule} from '@angular/forms';
import { TagPageComponent } from './tag-page/tag-page.component';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'recipe', component: RecipePageComponent},
  {path: 'category/:id', component: CategoryPageComponent},
  {path: 'recipe/:id', component: SingleRecipePageComponent},
  {path: 'blog/:id', component: SinglePostPageComponent},
  {path: 'tag/:tag', component: TagPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    BlogPageComponent,
    FooterComponent,
    RecipePageComponent,
    CategoryPageComponent,
    LoaderComponent,
    SingleRecipePageComponent,
    SinglePostPageComponent,
    CommentComponent,
    TagPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
