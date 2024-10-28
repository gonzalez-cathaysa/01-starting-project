import { Component } from '@angular/core';
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

  onSubmit(title: string, ticketText: string) {
    // console.log(titleElement);
    // console.dir(titleElement);
    // const enteredTitle = titleElement.value;
    // console.log('Entered title' + enteredTitle)
    console.log(title);
    console.log(ticketText);
  }
}
