import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    constructor(private viewportScroller: ViewportScroller) {}

  scrollToContact() {
    this.viewportScroller.scrollToAnchor('contact');
  }
    onMouseEnterBtn(element: HTMLElement) {
    element.classList.remove('animate-dont-push');
    element.classList.add('animate-push');
  }

  onMouseLeaveBtn(element: HTMLElement) {
    element.classList.remove('animate-push');
    element.classList.add('animate-dont-push');
  }
}
