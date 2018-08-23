import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscriptionComponent } from './unsubscription/unsubscription.component';
import { UIRouterModule } from '@uirouter/angular';
import { SUBSCRIPTION_STATES } from './subscription.states';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: SUBSCRIPTION_STATES })
  ],
  declarations: [UnsubscriptionComponent]
})
export class SubscriptionModule { }
