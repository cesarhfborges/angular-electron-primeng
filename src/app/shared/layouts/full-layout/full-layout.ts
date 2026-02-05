import {Component, computed, effect, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutService} from '@/app/shared/services/layout-service';
import {Footer} from '@/app/shared/layouts/full-layout/components/footer/footer';
import {Topbar} from '@/app/shared/layouts/full-layout/components/topbar/topbar';
import {Sidebar} from '@/app/shared/layouts/full-layout/components/sidebar/sidebar';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-full-layout',
  imports: [RouterModule, Footer, Topbar, Sidebar, NgClass],
  templateUrl: './full-layout.html',
  styleUrl: './full-layout.scss',
})
export class FullLayout {
  layoutService = inject(LayoutService);

  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (state.mobileMenuActive) {
        document.body.classList.add('blocked-scroll');
      } else {
        document.body.classList.remove('blocked-scroll');
      }
    });
  }

  containerClass = computed(() => {
    const config = this.layoutService.layoutConfig();
    const state = this.layoutService.layoutState();
    return {
      'layout-overlay': config.menuMode === 'overlay',
      'layout-static': config.menuMode === 'static',
      'layout-static-inactive': state.staticMenuDesktopInactive && config.menuMode === 'static',
      'layout-overlay-active': state.overlayMenuActive,
      'layout-mobile-active': state.mobileMenuActive
    };
  })
}
