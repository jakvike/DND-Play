import { Component } from '@angular/core';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  'selector': 'app-root',
  'templateUrl': './app.component.html',
  'styleUrls': ['./app.component.scss'],
})
export class AppComponent {
  title = 'open5E';
  faCoffee = faCoffee;
}
