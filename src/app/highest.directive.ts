import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighest]',
})
export class HighestDirective {
  @Input('appHighest') highest: any;

  constructor(private elem: ElementRef) {}
  @HostListener('change') ngOnChanges() {
    if (this.highest) {
      this.elem.nativeElement.style.backgroundColor = 'green';
      this.elem.nativeElement.style.color = 'white';
    } else {
      this.elem.nativeElement.style.backgroundColor = 'white';
      this.elem.nativeElement.style.color = 'black';
    }
  }
}
