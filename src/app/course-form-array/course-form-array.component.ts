import { Component } from "@angular/core";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "course-form-array",
  templateUrl: "./course-form-array.component.html",
  styleUrls: ["./course-form-array.component.css"]
})
export class CourseFormArrayComponent {
  // form = new FormGroup({
  //   name: new FormControl("", Validators.required),
  //   contact: new FormGroup({
  //     phone: new FormControl(),
  //     email: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([]),
    });
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = null;
  }

  get topics() {
    return this.form.get("topics") as FormArray;
  }
}
