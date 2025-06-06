import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join',
  imports: [ProjectTemplateComponent, HeaderComponent,RouterModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

}
