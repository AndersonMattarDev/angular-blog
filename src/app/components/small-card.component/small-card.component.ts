import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-small-card',
  standalone: true,
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css'],
  templateUrl: './small-card.component.html',
})
export class SmallCard {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
