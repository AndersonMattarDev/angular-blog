import { Component } from '@angular/core';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from '../../components/big-card/big-card';
import { SmallCard } from '../../components/small-card/small-card';
import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  imports: [MenuBar, MenuTitle, BigCard, SmallCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
