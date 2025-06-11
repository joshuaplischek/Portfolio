import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  imports: [ProjectComponent, TranslatePipe],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
