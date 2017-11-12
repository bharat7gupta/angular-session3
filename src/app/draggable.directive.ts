import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

class Position {
  constructor(public x: number, public y: number) { }
}

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective {

  private moving: boolean = false;
  private orignal: Position = null;
  private oldTrans: Position = new Position(0, 0);
  private tempTrans: Position = new Position(0, 0);

  private element: any;

  constructor(private el: ElementRef, private renderer: Renderer) { 
    this.element = el.nativeElement;
  }

  @HostBinding("style.cursor")
  cursor = "move"; // cursor type

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: any) {
    if (event.button == 2) {
      return;
    }

    this.orignal = new Position(event.clientX, event.clientY);
    this.startDragging();
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.moving) {
      this.stopDragging();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    if (this.moving) {
      this.moveTo(event.clientX, event.clientY);
    }
  }

  private startDragging() {
    this.moving = true;
    this.element.style.zIndex = '99999';
  }

  private stopDragging() {
    this.moving = false;
    this.oldTrans.x += this.tempTrans.x;
    this.oldTrans.y += this.tempTrans.y;
  }

  private moveTo(x: number, y: number) {
    if (this.orignal) {
      this.tempTrans.x = x - this.orignal.x;
      this.tempTrans.y = y - this.orignal.y;
      let value = `translate(${this.tempTrans.x + this.oldTrans.x}px, ${this.tempTrans.y + this.oldTrans.y}px)`;
      this.element.style.transform = value;
    }
  }
}
