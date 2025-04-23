import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { CatalogComponent } from './app/catalog/catalog.component';

const bootstrap = () => bootstrapApplication(CatalogComponent, config);

export default bootstrap;
