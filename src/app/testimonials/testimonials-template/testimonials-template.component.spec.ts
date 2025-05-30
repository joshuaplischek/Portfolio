import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsTemplateComponent } from './testimonials-template.component';

describe('TestimonialsTemplateComponent', () => {
  let component: TestimonialsTemplateComponent;
  let fixture: ComponentFixture<TestimonialsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
