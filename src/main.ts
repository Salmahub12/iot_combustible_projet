<<<<<<< HEAD
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
=======
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';


const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers || [],  
    provideHttpClient()  
  ]
};


bootstrapApplication(AppComponent, updatedAppConfig, )
  .catch((err) => console.error(err));
>>>>>>> 3d6922ecd39047e98669bf97e6bc380fc3378cb8
