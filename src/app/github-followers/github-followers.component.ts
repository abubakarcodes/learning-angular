import { GithubFollowersService } from "../services/github-followers.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  followers;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      combined => {
        console.log(combined[0].get("id"));
        console.log(combined[1].get("page"));
        this.service.getAll().subscribe(followers => {
          this.followers = followers;
        });
      }
    );
  }
}
