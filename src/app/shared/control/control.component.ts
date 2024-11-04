import {
  afterNextRender,
  afterRender,
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

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

//AfterRender and AfterNextRender
//But you'll also notice that afterRender is executed again and again whenever anything
//changes on that website
//Not if something changes in this component, this control component, but anything 
//anywhere on this website
//Whereas, afterNextRender is not logged again
//The idea behind these hooks here is that they allow you to define functions whenever 
//changes anywhere in the entire application or after the next change anywhere in the 
//entire Ang application
//AfterRender will execute a lot because it listens to all future changes, whereas afterNextRender will
//be triggered for the next change anywhere in the entire application


//The other lifecycle hooks like ngOnInit ends on so on refer to the component to which they belong

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
