import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  fruits = [
    {
      id: 1,
      name: "apple"
    },
    {
      id: 2,
      name: "grapes"
    },
    {
      id: 3,
      name: "banana"
    }
  ];
  log(x) {
    console.log(x);
  }

  submit(x) {
    console.log(x);
  }
}
