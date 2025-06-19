import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() projectLink: string = '';

  onMouseEnterAnimation(element: HTMLElement) {
    if (window.matchMedia('(min-width: 950px)').matches) {
      element.classList.remove('zoomOut');
      element.classList.add('zoomIn');
    }
  }

  onMouseLeaveAnimation(element: HTMLElement) {
    if (window.matchMedia('(min-width: 950px)').matches) {
      element.classList.remove('zoomIn');
      element.classList.add('zoomOut');
    }
  }

  onMouseEnterButton(element: HTMLElement) {
    element.classList.add('btn-hover');
    element.classList.remove('btn-unhover');
  }

  onMouseLeaveButton(element: HTMLElement) {
    element.classList.remove('btn-hover');
    element.classList.add('btn-unhover');
  }
}
