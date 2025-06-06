import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-template',
  imports: [],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.scss'
})
export class ProjectTemplateComponent {
  window = window;
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectDescriptionText: string = '';
  @Input() projectDetails: string = '';
  @Input() projectDetailsText: string = '';
  @Input() projectDuration: string = '';
  @Input() projectDurationInfo: string = '';
  @Input() projectCodeLanguage: string = '';
  @Input() projectExampleImg: string = '';
  @Input() projectInfoImg: string = '';
  @Input() projectGitHubBtn: string = '';
  @Input() projectLiveTestBtn: string = '';
}
