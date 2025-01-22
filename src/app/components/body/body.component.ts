import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  private isDown: boolean = false;
  private startX:number = 0;
  private scrollLeft: number = 0;

  constructor (private elementRef: ElementRef){

  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.startX = event.pageX - this.elementRef.nativeElement.offsetLeft;
    this.scrollLeft = this.elementRef.nativeElement.scrollLeft;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if ( this.isDown){
      const x = event.pageX - this.elementRef.nativeElement.offsetLeft;
      const walk = ( x - this.startX ) * 3;
      this.elementRef.nativeElement.scrollLeft = this.scrollLeft - walk;
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDown = false;
  }

}
