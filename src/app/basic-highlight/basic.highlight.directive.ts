import { Directive, ElementRef, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Directive({
    selector:'[dirBasicHighlight]'
})
export class BasicHighlightDirective{
    constructor(private elementRef:ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = "lightGrey";
    }


}