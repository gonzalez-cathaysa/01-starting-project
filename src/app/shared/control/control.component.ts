import { Component, input, ViewEncapsulation } from '@angular/core';

// go to our ControlComponent and there we can add another setting
// to the component decorator, another configuration property, and this is the host property
//Host wants an object as a value and that oject then takes any key value pairs of your choice
// And that will add this class attribute to app-control wherever it's being used

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>();
}
