import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetch(): Promise<unknown> {
    const url = `${environment.gitHubApi}/users/${environment.user}`;

    return new Promise(resolve => {
      this.http.get(url)
        .subscribe(data => resolve(data))
    })
    
  }
}
