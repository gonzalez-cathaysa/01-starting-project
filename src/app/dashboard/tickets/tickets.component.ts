import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {


  //I add the tickets component for 
  //And that should hold an array of tickets. And initially might be an empty array, 
  //but of course I wanted to find the shape of every ticket
}
