import { Component, ElementRef, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormComponent } from '../base-form.component';

@Component({
  selector: 'vm-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent extends BaseFormComponent {
  @Input()
  type: 'text' | 'number' | 'password' = 'text';

  @Input()
  updateOn;

  constructor(protected elementRef: ElementRef) {
    super(elementRef);
  }
}
