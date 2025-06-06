import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sharkie',
  imports: [ProjectTemplateComponent, HeaderComponent, RouterLink],
  templateUrl: './sharkie.component.html',
  styleUrl: '../my-projects-template.scss'
})
export class SharkieComponent {

}
