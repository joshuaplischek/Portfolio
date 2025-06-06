import { Component } from '@angular/core';
import { ProjectTemplateComponent } from "../project/project-template/project-template.component";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-poke-dex',
  imports: [ProjectTemplateComponent, HeaderComponent],
  templateUrl: './poke-dex.component.html',
  styleUrl: './poke-dex.component.scss'
})
export class PokeDexComponent {

}
