import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root"
})
export class PostsService extends DataService {
  constructor(http: HttpClient) {
    super("https://jsonplaceholder.typicode.com/posts", http);
  }
}
