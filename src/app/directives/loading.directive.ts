import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective {
  @Input() set appLoading(isLoading: boolean) {
    if (isLoading) {
      this.showLoader();
    } else {
      this.hideLoader();
    }
  }

  private loaderElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.loaderElement = this.renderer.createElement('div');
    this.loaderElement.innerHTML = `
      <ion-spinner name="crescent"></ion-spinner>
      <p>Carregando...</p>`;
    this.renderer.addClass(this.loaderElement, 'loading-container');
  }

  private showLoader() {
    this.renderer.appendChild(this.el.nativeElement, this.loaderElement);
  }

  private hideLoader() {
    if (this.loaderElement.parentNode) {
      this.renderer.removeChild(this.el.nativeElement, this.loaderElement);
    }
  }
}
