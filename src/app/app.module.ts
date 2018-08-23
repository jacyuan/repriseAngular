import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular'

import { AppComponent } from './app.component';
import { SubscriptionModule } from './component/subscription/subscription.module';
import { ProfileModule } from './component/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubscriptionModule,
    ProfileModule,
    UIRouterModule.forRoot({ useHash: false, otherwise: '/' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
