import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private http: HttpClient;
  messages: Message[];
  
  constructor(httpClient: HttpClient) {
    this.http = httpClient;   
  }

  postMessage(message: Message) {
    const url = `${environment.backendApi}/message`;
    return this.http.post(url, message, {
      headers: {
        apiKey: environment.backendApiKey
      }
    })
  }

  getMessages() {
    const url = `${environment.backendApi}/message`;
    return this.http.get(url, {
      headers: {
        apiKey: environment.backendApiKey
      }
    })
  }
}
