import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    onMouseEnter(element: HTMLElement) {
    element.classList.remove('animate-out');
    element.classList.remove('fade');
    element.classList.add('animate-in');
  }

  onMouseLeave(element: HTMLElement) {
    element.classList.remove('animate-in');
    element.classList.add('fade');
    element.classList.add('animate-out');
  }
}
