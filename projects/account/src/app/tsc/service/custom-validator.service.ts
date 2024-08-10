import {
    AbstractControl,
    ValidationErrors,
    Validators
} from '@angular/forms';

export class CustomValidators implements Validators {

    constructor() { }

    static confirmPassword(controlName1, controlName2): ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            control.setErrors({ passwordMismatch: true });

            if (control.get(controlName1).value !== control.get(controlName2).value) {
                control.get(controlName2).setErrors({ passwordMismatch: true });
                return ({ passwordMismatch: true });
            // } else if (control.get(controlName2).value.length == 0) {
            //     control.get(controlName2).setErrors({ required: true });
            //     return ({ required: true });
            } else {
                control.get(controlName2).setErrors(null);
                return null;
            }
        };
    }

}
