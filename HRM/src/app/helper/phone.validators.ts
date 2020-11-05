import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function phoneValidator(val: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let v: string = control.value;
        if (!(/^[0-9 ]+$/g).test(v)) {
            return {'phoneValidator': true, 'requiredValue': val}
        }
        return null;
    }
}
