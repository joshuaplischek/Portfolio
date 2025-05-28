import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-my-projects',
  imports: [ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
