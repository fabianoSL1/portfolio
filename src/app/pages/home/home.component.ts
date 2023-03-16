import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  private userService: FetchUserService;

  constructor(serviceUser: FetchUserService) {
    this.userService = serviceUser;
    this.employments = mockEmployment;
    this.stack = mockTechnology;
    
    
  }

  ngOnInit(): void {
    

    const parseData = (data: any) => {
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

    if(this.userService.userData){
      parseData(this.userService.userData)
    } else {
      this.userService.fetch()
        .subscribe(data => {
          this.userService.userData = data
          parseData(data)
        })
    }
  }

  openGitHub() {
    window.open(this.user?.url)
  }

}
