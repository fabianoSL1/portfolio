import { Component, OnInit } from '@angular/core';
import { Employment, mockEmployment } from 'src/app/interfaces/employment';
import { Technology, mockTechnology } from 'src/app/interfaces/technology';
import { User } from 'src/app/interfaces/user';
import { FetchUserService } from 'src/app/services/fetch-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user?: User;
  employments: Employment[];
  stack: Technology[];

  private serviceUser: FetchUserService;

  constructor(serviceUser: FetchUserService) {
    this.serviceUser = serviceUser;
    this.employments = mockEmployment;
    this.stack = mockTechnology;
  }

  async ngOnInit() {
    this.user = await this.fetchUser();
  }

  async fetchUser(): Promise<User> {
    const data = await this.serviceUser.fetch() as any;

    return {
      url: data.html_url,
      avatarUrl: data.avatar_url,
      name: data.name,
      repositories: data.public_repos,
      followers: data.followers,
      following: data.following,
      company: data.company,
      email: data.email,
      location: data.location,
      bio: data.bio
    }
  }

  openGitHub() {
    window.open(this.user?.url)
  }

}
