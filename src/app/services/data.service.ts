import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
// import "rxjs/add/observable/throw";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadError } from "../common/bad-error";

export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(
      // map(response => {
      //   return response;
      // }),
      tap(response => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  create(resource) {
    // return throwError(new AppError()); for testing purpose
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      // map(response => {
      //   // console.log(response);
      //   return response;
      // }),
      tap(response => {
        // console.log(response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  update(id) {
    return this.http
      .patch(this.url + "/" + id, JSON.stringify({ isRight: true }))
      .pipe(
        // map(response => {
        //   return response;
        // }),
        tap(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  delete(id) {
    // return throwError(new AppError());
    return this.http.delete(this.url + "/" + id).pipe(
      // map(response => {
      //   return response;
      // }),
      tap(response => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      // return Observable.throw(new BadError());
      return throwError(new BadError());
    }
    if (error.status === 404) {
      // return Observable.throw(new NotFoundError());
      return throwError(new NotFoundError());
    }
    // return Observable.throw(new AppError(error));
    return throwError(new AppError(error));
  }
}
