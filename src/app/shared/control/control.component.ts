import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
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
    '(click)': 'onClick()',
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

  // When we click on the host element, I wanna output some information about it,
  // which obviously is not a real use case
  // But here in this app I don't have a real use case because it is a feature
  // you won't need that often

  // So for this demo, let's say we wanna log some host element information
  // whenever is clicked

  // What you can do to achieve this, is you can inject a special value into your
  // component, a value that will be provided by Angular
  // And you can inject either with the constructor as your learned it for services
  // or with help of that inject function about which you also learned

  label = input.required<string>();
  // We have to pass the ElementRef class name, ElementRef is a class defined by Angular
  // which defines a reference to some element
  private el = inject(ElementRef);

  onClick() {
    console.log('Clicked');
    console.log(this.el);
  }

  //There is one other last host element-related feature
  // you should know about though

  // You might need programmatic access to the host element
  // So you might need to interact with it from your TS code

  //But by injecting it into a component like this,
  //Angular will give yu access to the host element

  
}
