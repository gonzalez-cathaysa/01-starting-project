import {
  Component,
  contentChild,
  ContentChild,
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
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
 
  label = input.required<string>();
  private el = inject(ElementRef);

  //In this app ControlComponent will then be an ElementRef
  //I'm using ContentChild instead of ContentChildren here, 
  //even though multiple elements have that input variable 
  //because in each instance of my ControlComponent there 
  //will only be input or text area
  //I'm only passing one input or text area element per app 
  //ControlComponent instance
  //Control could be undefined if nothing's found
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }



  
}
