import { Component, OnInit } from '@angular/core';
import { Message } from './interfaces/message';
import { BackendService } from './services/backend.service';
import { FetchProjectsService } from './services/fetch-projects.service';
import { FetchUserService } from './services/fetch-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  
  private backendService: BackendService;
  private userService: FetchUserService;
  private projectsService: FetchProjectsService;

  constructor(backendService: BackendService, userService: FetchUserService, projectsService: FetchProjectsService) {
    this.backendService = backendService;
    this.userService = userService;
    this.projectsService = projectsService;
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
    
      this.userService.fetch()
        .subscribe(data => {
          this.userService.userData = data
        })

      this.projectsService.fetch()
        .subscribe(data => {
          this.projectsService.projects = data as unknown[]
        })
  }
  handleMessage(message: Message) {
    this.backendService.postMessage(message)
      .subscribe(data => this.fetchMessages())
  }
}
