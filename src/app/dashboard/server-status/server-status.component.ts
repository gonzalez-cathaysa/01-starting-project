import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancellationCode } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  // currentStatus = 'online';
  // Setting specific string values as types uses a TS feature
  // called 'Literal types'. The idea is to only allow specific
  // (string) values - instead of all strings

  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  // To inject a special value into your components, a so called DestroyRef
  // you can inject it with help of the constructor, the type is destroyRef
  // and by injecting or storing it in a property, you can set up a listener 
  // with help of that property and the injected value that will trigger a 
  // function whenever the component into which you injected destroyRef
  // is about to be destroyed
  private destroyRef = inject(DestroyRef);



  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => {
      // We could now simply store our interval in a constant, which is only available in ngOnInit,
      // because right after setting that interval we can use DestroyRef to call OnDestroy and register
      // a function that will be executed
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(()=> {
      clearInterval(interval)
    });
    //Register a function that will be executed by angular when this component is 
    //about to be destroyed. That interval constant is only available in ngOnInit,
    //but that's also where I'm setting up this Destroy listener, and you can use 
    //it as many OnDestroy listeners as you need in any methods of this component
    
  }

}
