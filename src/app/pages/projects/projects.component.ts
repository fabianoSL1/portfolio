import { Component, Injectable, OnInit } from '@angular/core';
import { FetchProjectsService } from '../../services/fetch-projects.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private service: FetchProjectsService;
  DisplayColumns: string[] = ['name', 'repository', 'preview'];
  projects: Project[];

  constructor(service: FetchProjectsService) {
    this.service = service;
    this.projects = [];
  }

  ngOnInit() {
    const parseData = (data: any[]) => {
      return data.map<Project>((project: any) => ({
        name: project.name,
        fullName: project.full_name,
        repository: project.html_url,
        createAt: new Date(project.created_at),
        preview: project.homepage
      }))
    }

    if (this.service.response)
      this.projects = parseData(this.service.response as any[]);
    else
      this.service.fetch()
        .subscribe((response: any) => {
          this.service.response = response;
          this.projects = parseData(response as any[]);
        });
  }

  open(link: string) {
    window.open(link)
  }
}
