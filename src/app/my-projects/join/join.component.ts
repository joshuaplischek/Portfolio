import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-join',
  imports: [ProjectTemplateComponent, HeaderComponent,RouterModule, TranslatePipe],
  templateUrl: './join.component.html',
  styleUrl: '../my-projects-template.scss'
})
export class JoinComponent {

}
