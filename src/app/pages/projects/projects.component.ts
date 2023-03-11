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

  projects: Project[];

  constructor(service: FetchProjectsService) {
    this.service = service;
    this.projects = [];
  }

  async ngOnInit() {
    let data = await this.service.fetch() as Array<any>;

    this.projects = data.map<Project>((project: any) => {
      return {
        name: project.name,
        fullName: project.fullName,
        repository: project.html_url,
        createAt: new Date(project.create_at),
        preview: project.homepage
      }
    })
  }
}