import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
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
