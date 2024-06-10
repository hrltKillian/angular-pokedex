import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTableColor]',
  standalone: true
})
export class TableColorDirective implements OnInit {
  @Input() appTableColor: string = '';

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.setTableColor(this.appTableColor);
  }

  private setTableColor(statNameAndNumber: string): void {
    let color = '';
    switch (statNameAndNumber) {
      case 'hp':
        color = '#BEFFA4';
        break;
      case 'attack':
        color = '#FFE2A3';
        break;
      case 'defense':
        color = '#FFB9A3';
        break;
      case 'special-attack':
        color = '#A3D9FF';
        break;
      case 'special-defense':
        color = '#B9A3FF';
        break;
      case 'speed':
        color = '#FFA3DC';
        break;
      case '2':
        color = '#79D143';
        break;
      case '0.5':
        color = '#D04242';
        break;
      case '0':
        color = '#474747';
        break;
      default:
        color = '#F1F1F1';
        break;
    }
    this.render.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
