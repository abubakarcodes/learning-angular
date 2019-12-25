import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";
import { PasswordValidators } from "./password.validators";

@Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotConatainSpace,
    ],
      UsernameValidators.shouldUnique

    ),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      PasswordValidators.cannotContainSpace
    ])
  });

  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
}
