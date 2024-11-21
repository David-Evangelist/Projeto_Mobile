import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  @Input('appHoverColor') hoverColor: string = 'blue';
  private defaultColor: string = '';

  constructor(private el: ElementRef) {
    this.defaultColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = this.defaultColor;
  }
}
