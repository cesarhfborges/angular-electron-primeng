import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling} from '@angular/router';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }),
      withEnabledBlockingInitialNavigation()
    ),
    provideHttpClient(withFetch()),
    provideZonelessChangeDetection(),
    providePrimeNG({theme: {preset: Aura, options: {darkModeSelector: '.app-dark'}}})
  ]
};
