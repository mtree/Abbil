import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IApiService } from './lib/api/api.service';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ApiServiceFactory } from './lib/api/api.factory';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.state';
import { AppEffects } from './store/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // Import the StoreDevtoolsModule

export const API_SERVICE_TOKEN = new InjectionToken<IApiService>('apiService');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false, // TODO: Production mode
    })
  ],
  providers: [
    provideRouter(routes),
    { provide: API_SERVICE_TOKEN, useFactory: ApiServiceFactory.create }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
