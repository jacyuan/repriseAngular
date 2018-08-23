import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular'

import { AppComponent } from './app.component';
import { SubscriptionModule } from './component/subscription/subscription.module';
import { ProfileModule } from './component/profile/profile.module';
import { SubscriptionService } from './service/subscription.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SubscriptionModule,
    ProfileModule,
    UIRouterModule.forRoot({ useHash: false, otherwise: '/' })
  ],
  providers: [SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
