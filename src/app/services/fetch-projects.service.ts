import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchProjectsService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetch() {
    let url = `${environment.gitHubApi}/users/${environment.user}/repos`;

    return new Promise((resolve) => {
      this.http.get(url)
        .subscribe((data: unknown) => resolve(data))
    })
  }
   

}
