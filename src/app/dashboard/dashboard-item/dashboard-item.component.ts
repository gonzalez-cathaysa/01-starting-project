import { Component, input, Input } from '@angular/core';
import { of } from 'rxjs';

// And again use that setting to add the class property
// Use that setting to add the class property to the host element
// so to this app-dashboard-item element and set it to a value of
// dashboard-item or whichever CSS class you want to add here ...

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: {
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
  //Expect to get an object as a value image
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;

  //We are getting those inputs in the dashboard item component HTML file
  //Input function
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();

}
