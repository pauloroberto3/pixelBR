import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Inicia a aplicação no modo standalone
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));