import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

// go to our ControlComponent and there we can add another setting
// to the component decorator, another configuration property, and this is the host property
//Host wants an object as a value and that oject then takes any key value pairs of your choice
// And that will add this class attribute to app-control wherever it's being used

// When you work with a host element of an Angular component.
// There are 2 other things you should know about
// When it comes to adding properties to the host element
// you can use this host setting on the component decorator object
// and that is the preferred way of doing it
// But alternative you can add a property to your component class
// and name it className and set the value you wanna bind on your
// host element

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //You should instead use the host property
  //Alternatively, you could add event binding here as well
  //and then here define the method of the class that should
  //be executed when thar event occurs
  host: {
    class: 'control',
    '(click)': 'onClick()'
  },
})
export class ControlComponent {
  //HostBinding will do is it will take a look at this
  //property name and it will then add it as a property
  //to the host element and set this as a value for that
  //property

  // @HostBinding('class') className = 'control';
  // There also is a HostListener decorator which you can import and use,
  // which allows you to bind a method to an event to which you wanna listen here

  //Alternatively, which allows you to bind a method to an event to which you wanna
  //listen here
  //You must pass an argument to HostListener, and specify the event that you should listen
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }

  label = input.required<string>();

  onClick() {
    console.log('Clicked');
  }
}
