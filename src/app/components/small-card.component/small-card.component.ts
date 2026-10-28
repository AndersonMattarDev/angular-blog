import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
