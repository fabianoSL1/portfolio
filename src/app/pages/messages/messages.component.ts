import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  backendService: BackendService;
  messages: Message[];

  constructor(backendService: BackendService) {
    this.backendService = backendService;
  }

  ngOnInit(): void {
    this.messages = this.backendService.messages.map(message => {
      return {...message, created_at: new Date(message.created_at as string)}
    })
  }

}
