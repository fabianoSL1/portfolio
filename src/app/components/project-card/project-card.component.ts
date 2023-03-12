import { Component, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  
  @Input() project?: Project;

  open(url: string) {
    window.open(url);
  }

}
