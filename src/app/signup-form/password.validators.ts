import { ValidationErrors, AbstractControl } from "@angular/forms";

export class PasswordValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") !== -1) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}
