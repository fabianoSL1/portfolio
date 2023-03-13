import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

  openGitHub() {
    window.open(this.user.url);
  }

}
