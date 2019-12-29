import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { NotFoundError } from "../common/not-found-error";
import { AppError } from "../common/app-error";
import { BadError } from "../common/bad-error";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "posts-component",
  templateUrl: "./posts-component.component.html",
  styleUrls: ["./posts-component.component.css"]
})
export class PostsComponentComponent implements OnInit {
  posts;
  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      posts => {
        this.posts = posts;
      }
      // (error: AppError) => {
      //   if (error instanceof BadError) {
      //     alert("sorry nothing is found");
      //   } else {
      //     alert("An Unexpected Error Occurs");
      //     console.log(error);
      //   }
      // }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";
    // used for optimistic approach
    this.posts.splice(0, 0, post);
    this.service.create(post).subscribe(
      newPost => {
        post = newPost;
        // this.posts.splice(0, 0, post); pessimistic approach to create data  after sever
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadError) {
          // this.form.setErrors(error.orignalError);
          // alert(error);
        }
        throw error;
      }
    );
  }

  updatePost(post: HTMLInputElement) {
    this.service.update(post.id).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      post => {
        console.log(post);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("item is not found");
        } else {
          throw error;
        }
      }
    );
  }
  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id).subscribe(
      // for premistic approach
      // () => {
      //   const index = this.posts.indexOf(post);
      //   this.posts.splice(index, 1);
      // }
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          alert("sorry item is already deleted");
        } else {
          throw error;
        }
      }
    );
  }
}
