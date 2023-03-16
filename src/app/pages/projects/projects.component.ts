import { Component, OnInit } from '@angular/core';
import { FetchProjectsService } from '../../services/fetch-projects.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projectsService: FetchProjectsService;
  DisplayColumns: string[] = ['name', 'repository', 'preview'];
  projects: Project[];

  constructor(service: FetchProjectsService) {
    this.projectsService = service;
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

    if (this.projectsService.projects) {
      this.projects = parseData(this.projectsService.projects as any[]);
    } else {
      this.projectsService.fetch()
        .subscribe(response => {
          let data = response as unknown[];
          this.projectsService.projects = data;
          parseData(data);
        })
    }
  }

  open(link: string) {
    window.open(link)
  }
}
