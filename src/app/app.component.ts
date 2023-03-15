import { Component, OnInit } from '@angular/core';
import { Message } from './interfaces/message';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  
  private backendService: BackendService;

  constructor(backendService: BackendService) {
    this.backendService = backendService;
  }

  ngOnInit(): void {
    this.fetchMessages()
  }
  
  fetchMessages() {
    this.backendService.getMessages()
      .subscribe(data => {
        let messages = data as Message[];
        this.backendService.messages = messages.reverse();
      })
 
  }
  handleMessage(message: Message) {
    this.backendService.postMessage(message)
      .subscribe(data => this.fetchMessages())
  }
}
