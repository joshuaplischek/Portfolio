import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Technology {
  imgPath: string;
  name: string;
}

@Component({
  selector: 'app-project-template',
  imports: [CommonModule],
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
  @Input() technologies: Technology[] = [];

  onMouseEnterBtn(element: HTMLElement) {
    element.classList.remove('animate-dont-push');
    element.classList.add('animate-push');
  }

  onMouseLeaveBtn(element: HTMLElement) {
    element.classList.remove('animate-push');
    element.classList.add('animate-dont-push');
  }
}
