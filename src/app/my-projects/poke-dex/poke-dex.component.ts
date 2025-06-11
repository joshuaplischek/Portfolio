import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-poke-dex',
  imports: [ProjectTemplateComponent, HeaderComponent, RouterLink, TranslatePipe],
  templateUrl: './poke-dex.component.html',
  styleUrl: '../my-projects-template.scss'
})
export class PokeDexComponent {

}
