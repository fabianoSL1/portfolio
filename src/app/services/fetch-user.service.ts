import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {
  private http: HttpClient;
  userData: unknown;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetch() {
    const url = `${environment.gitHubApi}/users/${environment.user}`;
    return this.http.get(url);
  }
}
