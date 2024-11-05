import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { NavigationCancellationCode } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  private destroyRef = inject(DestroyRef);
  constructor() {
    //Angular will not set up a subscription

    //That means you can safely read Signal values in your TS code without setting up accidental subscription
    //but the downside is that sometimes you might want to set up a subscription and you're not getting it then
    //That's why Ang offers you a special function the effect function, which you can execute in your constructor
    //for example
    //Effect takes a function as an argument and if you then use a Signal in that function that's passed to effect,
    //Angular will set up a subscription
    //So by moving this code into this function that's passed to a effect, Angular does set up a subscription
    //And it it'll automatically clean up that subscription it that component should ever get remove from the dom
    effect(()=>{
      console.log(this.currentStatus())
    })
    // console.log(this.currentStatus());
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
