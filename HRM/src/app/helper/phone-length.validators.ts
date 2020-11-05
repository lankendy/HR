import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export function phoneLength(val: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let v: string = control.value;
        if (v.length < 12) {
            return {'phoneLength': true}
        }
        return null;
    }
}