import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverTitle]'
})
export class HoverTitleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('blue'); // Altera a cor para azul quando o mouse entra
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black'); // Retorna para a cor preta quando o mouse sai
  }

  private changeColor(color: string) {
    // Aplica a mudança de cor ao título com a marcação de !important
    this.renderer.setStyle(this.el.nativeElement, 'color', color, 2 /* RendererStyleFlags2.Important */);
  }
}
