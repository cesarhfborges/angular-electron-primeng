import {Component, computed, inject, input} from '@angular/core';
import {LayoutService} from '@/app/shared/services/layout-service';
import {CommonModule} from '@angular/common';
import {Button} from 'primeng/button';
import {StyleClass} from 'primeng/styleclass';

@Component({
  selector: 'app-floating-configurator',
  imports: [
    CommonModule,
    Button,
    StyleClass,
  ],
  templateUrl: './floating-configurator.html',
  styleUrl: './floating-configurator.scss',
})
export class FloatingConfigurator {
  layoutService = inject(LayoutService);

  float = input<boolean>(true);

  isDarkTheme = computed(() => this.layoutService.layoutConfig().darkTheme);

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({...state, darkTheme: !state.darkTheme}));
  }
}
