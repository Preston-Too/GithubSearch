import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) { }
  setColor(color: string) {
    this.renderer.setStyle(
      this.elem.nativeElement, 'backgroundColor', color
    );
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.setColor('cyan')
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.setColor('white')
  }

}


