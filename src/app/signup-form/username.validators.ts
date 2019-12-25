import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotConatainSpace(
    control: AbstractControl
  ): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") !== -1) {
      return { cannotConatainSpace: true };
    }
    return null;
  }

  static shouldUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "abubakar") {
          resolve({ shouldUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

}
