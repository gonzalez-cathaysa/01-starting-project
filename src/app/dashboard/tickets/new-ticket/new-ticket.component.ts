import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // In the template variable we assigned to some other element,
  // the type would reflect that element, the type would reflect that element
  // e g, on a <textarea>, it would be HTMLTextAreaElement

  //HTMLInput element is a type that is build in TS in the end, it is a type that
  //describes the underlying DOM object of such an input element
  //In chrome it is hard to analyze because for convenience reasons the Chrome dev
  //tools actually output that element as an HTML element but actually what we get is
  //an object, a JS object
  //The chrome dev tools will output it as an object instead if you use console.dir

  // One piece of data we can extract from that object is the value property


  //By decorating this property with the ViewChild decorator, 
  //The ViewChild decorator is a decorator that can be used to select elements in the
  //template of this component and make them available here in the component class
  //ViewChild is a decorator that helps us find child elements in that component's 
  //view, so in that component's template
  //ViewChild needs a selector as an argument and that selector can be a string 
  //and I'll show you what to put into that string, and that selector can be a string
  //But it could also be the class name of your Components like ButtonComponent,

  //If you would use such a class name then ViewChild would look for an instance
  //of your ButtonComponent in this template, and here it would find one, 
  //and it would then store that instance in that from property here
  //So then you could interact with that ButtonComponent instance via that
  //property in this component class
  //You can also not just pass component classes here, but also classes of
  //directives but that's not something we need to do here
  //Another pretty powerful way of using ViewChild is to pass a string to 
  //it and as a string value you pass one of your template variables names
  //So for example form, 
  //You can't pass a CSS selector here, something like that won't work
  //@ViewChild('.control') You can't select element by CSS class, but you can
  //pass the name of a template variable
  //So by passing form here without the hashtag, I'm telling Angular that it
  //should look for an element with a template variable called form on it

  //The ElementRef type just defines the type for a wrapper object though.
  //Because Angular in the end will wrap the element it finds with help of that
  //selector in such an ElementRef object. ElementRef is actually a generic type
  //that will be wrapped by it here when using ViewChild

  //We add ? This property will not immediately be populated with a value
  //When this component class here is instantiated, no template will exist yet 
  //because Angular won't have initialized it yet
  //When this component class here is instantiated, no template will exist yet
  //because Angular won't have initialized it yet
  //To be precise: No View will exist yet. The template exists but the component View
  //hasn't been initialized by Angular yet
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    // console.log(titleElement);
    // console.dir(titleElement);
    // const enteredTitle = titleElement.value;
    // console.log('Entered title' + enteredTitle)
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}
