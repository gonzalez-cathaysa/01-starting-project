import {
  AfterViewInit,
  Component,
  ElementRef,
  resolveForwardRef,
  viewChild,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');



  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form?.nativeElement)
  }


  //We can use a ticket storage, but we can also manage in a property of the 
  //tickets component and use a custom event an output to pass the submitted data
  //from the new ticket component to the tickets component and then update the tickets
  //data here in that component

  //And update tickets.component.ts whenever new data is submitted

  onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    console.log(title);
    console.log(ticketText);
    // this.form()?.nativeElement.reset();
    this.form?.nativeElement.reset();
  }


}
