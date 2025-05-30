import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-testimonials-template',
  imports: [CommonModule],
  templateUrl: './testimonials-template.component.html',
  styleUrl: './testimonials-template.component.scss'
})
export class TestimonialsTemplateComponent {
  @Input() feedback: string = '';
  @Input() name: string = '';
  @Input() status: string = '';
  @Input() link: string ='';
}
