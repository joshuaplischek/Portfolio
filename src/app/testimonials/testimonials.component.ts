import { Component } from '@angular/core';
import { TestimonialsTemplateComponent } from './testimonials-template/testimonials-template.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialsTemplateComponent, TranslatePipe],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

}
