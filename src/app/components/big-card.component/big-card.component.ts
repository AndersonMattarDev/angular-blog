import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-big-card',
  standalone: true,
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css'],
  templateUrl: './big-card.component.html',
})
export class BigCard {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
