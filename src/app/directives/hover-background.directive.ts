import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[hoverBackground]'
})
export class HoverBackgroundDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.transform') back = ''

  @HostListener('mouseover') onMouseOver() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', '#4400d1');
    console.log('oi')
    this.back = 'translateY(-5px)'
  }

  @HostListener('mouseout') onMouseOut() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.back = 'translateY(0px)'
  }
}