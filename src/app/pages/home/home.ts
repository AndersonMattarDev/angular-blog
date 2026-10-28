import { Component } from '@angular/core';
import { MenuTitle } from '../../components/menu-title.component/menu-title.component';
import { BigCard } from '../../components/big-card.component/big-card.component';
import { SmallCard } from '../../components/small-card.component/small-card.component';

@Component({
  imports: [MenuTitle, BigCard, SmallCard],
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.css', './home.responsive.component.css'],
  templateUrl: './home.html',
})
export class Home {
  constructor() {}
  ngOnInit() {}
}
