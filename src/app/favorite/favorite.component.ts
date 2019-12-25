import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
  // encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
