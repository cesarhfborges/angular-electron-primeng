import {Component, OnInit} from '@angular/core';
import {MenuItem as IMenuItem} from 'primeng/api';
import {MenuItem} from '@/app/shared/layouts/full-layout/components/menu-item/menu-item';
import MenuItems from '@/app/shared/layouts/full-layout/components/menu/menu-items';

@Component({
  selector: 'app-menu',
  imports: [
    MenuItem
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {
  model: IMenuItem[] = [];

  ngOnInit() {
    this.model = MenuItems;
  }
}
