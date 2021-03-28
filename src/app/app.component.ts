import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() test;
  @Output() routeChanged = new EventEmitter();

  constructor(public router: Router) {}

  navigateTest() {
    this.routeChanged.emit('angular moved page - ' + Math.random());
    this.router.navigateByUrl('/test', { skipLocationChange: true }).then(value => console.log(value));
  }
}
