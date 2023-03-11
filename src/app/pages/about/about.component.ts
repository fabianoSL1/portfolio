import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FetchUserService } from 'src/app/services/fetch-user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user?: User;
  private serviceUser: FetchUserService;

  constructor(serviceUser: FetchUserService) {
    this.serviceUser = serviceUser;
  }

  async ngOnInit() {
    const data = await this.serviceUser.fetch() as any;
    this.user = {
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
