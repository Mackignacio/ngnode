import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { environment as env } from "../../environments/environment";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  API_URL = env.API_URL;
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }

  public post(uri: string, value) {
      console.log(value);
      
    return this.http
      .post(`${this.API_URL}${uri}`, value)
      .pipe(catchError(this.handleError));
  }

  public get(uri: string) {
    return this.http.get(this.API_URL + uri).pipe(catchError(this.handleError));
  }

  public put(uri: string, value) {
    return this.http.put(this.API_URL + uri, value);
  }

  public delete(uri: string, value?: any) {
    return this.http
      .delete(this.API_URL + uri, value)
      .pipe(catchError(this.handleError));
  }

  public patch(uri: string, value) {
    return this.http
      .patch(this.API_URL + uri, value)
      .pipe(catchError(this.handleError));
  }
}
