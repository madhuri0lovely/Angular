
import {Component} from '@angular/core';


@Component({
    selector: 'my-first-component',
    template: `<h1 *ngIf="first" >This is my first {{msg}}.</h1>
    <h1 *ngIf="!first"> This is the other {{msg}}.</h1>`,
    styles: []
})
export class myFirstComponent{
    first = true;
    msg = "Component";
}