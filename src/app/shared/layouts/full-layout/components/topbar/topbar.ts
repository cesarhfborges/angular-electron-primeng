import {Component, inject} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from '@/app/shared/services/layout-service';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {StyleClass} from 'primeng/styleclass';
import {Configurator} from '@/app/shared/layouts/full-layout/components/configurator/configurator';

@Component({
  selector: 'app-topbar',
  imports: [
    RouterLink,
    NgClass,
    StyleClass,
    Configurator
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  items!: MenuItem[];

  layoutService = inject(LayoutService);

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme
    }));
  }
}
