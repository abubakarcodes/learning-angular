import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <h2>{{ "Title: " + title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <br />
    <h2>{{ "Title: " + fruitsTitle }}</h2>
    <ul>
      <li *ngFor="let fruit of fruits">{{ fruit }}</li>
    </ul>
    <h2>{{ "Title: " + namesTitle }}</h2>
    <ul>
      <li *ngFor="let name of names">
        {{ name }}
      </li>
    </ul>

    <h1 [textContent]="propertyBinding"></h1>
    <h1 textContent="{{ propertyBinding }}"></h1>
    <table>
      <tr>
        <td [attr.colspan]="colSpan">{{ attributeBinding }}</td>
      </tr>
    </table>

    <button class="btn btn-primary" [class.active]="isActive">
      Class Binding
    </button>
    <br />
    <button [style.backgroundColor]="color" [style.color]="color2">
      Style Binding
    </button>
    <br />
    <button class="btn btn-success" (click)="onClick()">Event Binding</button>
    <div (click)="onClickDiv()">
      <button (click)="onClickButton($event)">Event Bubbling</button>
    </div>

    <div class="col-md-6">
      <input
        class="form-control"
        (keyUp.enter)="onKeyUp()"
        placeholder="event filtering on keyUp enter see console"
        [(ngModel)]="email"
      />
      <input
        class="form-control"
        (keyUp.enter)="onKeyUp()"
        placeholder="event filtering on keyUp enter see console"
        [(ngModel)]="name"
      />
    </div>


    <div>
    <h1>Pipes and pipes types uppercase , lowercase , number , currency , date</h1>
      <h2>{{course.name | uppercase}}</h2>
      <h2>{{course.courseNumber | number}}</h2>
      <h2>{{course.rating | number:'2.2-4'}}</h2>
      <h2>{{course.price | currency:'PKR'}}</h2>
      <h2>{{course.date | date:'shortDate'}}</h2>
    </div>
  `
})
export class CoursesComponent {
  course = {
    name: "php",
    courseNumber: 12311,
    rating: 5.48,
    price: 3600,
    date: new Date(),
  };

  title = "list of courses";
  propertyBinding = "this is property binding";
  attributeBinding =
    "attribute binding and property binding are two different things. Html has both property binding and attr binding but in angular there is only property binding for DOM";
  fruitsTitle = "List of Fruits";
  namesTitle = "List of Names";
  colSpan = 2;
  courses;
  fruits;
  names;
  isActive = true;
  email = "abubakar@gmail.com";
  color = "blue";
  color2 = "white";
  name;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.names = service.getNames();
    this.fruits = service.getFruits();
  }

  onClick() {
    alert("this is called event binding");
  }

  onClickDiv() {
    console.log("you clicked on div");
  }
  onClickButton($event) {
    //it is used to get rid of event bubbling means that if you click a element with in a element
    //that both have same event of click
    // and want to fire event of only the element you click so we use this method
    $event.stopPropagation();
    console.log("you clicked on button", $event);
  }

  onKeyUp() {
    console.log(this.email, this.name);
  }
}
