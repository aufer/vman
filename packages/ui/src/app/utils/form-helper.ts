import { FormBuilder, FormControl, Validators } from '@angular/forms';

export function formGroupFrom(obj: any, builder: FormBuilder) {
  if (!obj) return;
  if (!isObj(obj)) throw Error('formGroupFrom: expect obj to be typeof object but is scalar');

  return builder.group(Object.entries(obj).reduce((state, [key, val]) => {
    return {...state, [key]: isObj(val) ? formGroupFrom(val, builder) : new FormControl(val, [Validators.required])};
  }, {}));
}

const isObj = obj => typeof obj === 'object';
