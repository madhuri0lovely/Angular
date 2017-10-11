import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      Angular Works!
    </p>
    <my-first-component></my-first-component>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
