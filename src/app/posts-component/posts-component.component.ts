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
  posts: any[];
  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      response => {
        this.posts = response;
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
    const post: any = { title: input.value };
    input.value = "";
    this.service.create(post).subscribe(
      response => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadError) {
          // this.form.setErrors(error.orignalError);
          // alert(error);
        }
        throw error;
      }
    );
  }

  updatePost(post: HTMLInputElement) {
    // there are two methods for update patch and put mostly used is put
    // difference is put is used to completely update the object
    // but the patch in used to update a single attribute like isRight, isTrue,boolean etc.

    this.service.update(post.id).subscribe(
      response => {
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("item is not found");
        } else {
          throw error;
        }
      }
    );
    // this.http
    //   .put(this.url + "/" + post.id, JSON.stringify({ isRight: true }))
    //   .subscribe(response => {
    //     console.log(response);
    //   });
  }
  deletePost(post) {
    this.service.delete(post.id).subscribe(
      response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("sorry item is already deleted");
        } else {
          throw error;
        }
      }
    );
  }
}
