import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { FavoriteComponent } from "./favorite/favorite.component";
import { PanelComponent } from "./panel/panel.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { CourseFormArrayComponent } from "./course-form-array/course-form-array.component";
import { PostsComponentComponent } from "./posts-component/posts-component.component";
import { PostsService } from "./services/posts.service";
import { AppErrorHandler } from "./common/app-error-handler";
import { NavbarComponent } from "./navbar/navbar.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubFollowersService } from "./services/github-followers.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    CourseFormArrayComponent,
    PostsComponentComponent,
    NavbarComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers/:id/:username", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostsComponentComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler } //global error handler
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
