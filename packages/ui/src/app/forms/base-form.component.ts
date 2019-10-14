import { ControlValueAccessor, FormControl, Validators } from '@angular/forms';
import { ElementRef, Input, OnInit } from '@angular/core';

export abstract class BaseFormComponent implements ControlValueAccessor, OnInit {
  onChange: any = () => {};
  onTouched: any = () => {};

  formControl: FormControl;

  private _disabled: boolean;
  @Input()
  set readonly(disabled: boolean) {
    this._disabled = disabled;
    disabled ? this.formControl.disable() : this.formControl.enable();
  }

  get readonly(): boolean {
    return this._disabled;
  }

  protected constructor(protected elem: ElementRef, protected updateEvent: 'blur' | 'change' = 'change') {
    this.formControl = new FormControl(null, {validators: [Validators.required], updateOn: updateEvent});
  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(v => {
      if (this.readonly) return;
      this.onChange(v);
    });
  }

  get name() {
    return this.elem.nativeElement.getAttribute('formcontrolname');
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.formControl.setValue(value);
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
