import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-poke-dex',
  imports: [ProjectTemplateComponent, HeaderComponent, RouterLink],
  templateUrl: './poke-dex.component.html',
  styleUrl: '../my-projects-template.scss'
})
export class PokeDexComponent {

}
