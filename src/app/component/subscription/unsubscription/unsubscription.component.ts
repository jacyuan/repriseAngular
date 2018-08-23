import { Component, OnInit } from '@angular/core';
import { Transition } from '@uirouter/core';
import { SubscriptionService } from '../../../service/subscription.service';
import { PROFILE_CONSTANTS } from '../../profile/profile.constant.ts';

@Component({
  selector: 'app-unsubscription',
  templateUrl: './unsubscription.component.html',
  styleUrls: ['./unsubscription.component.scss']
})
export class UnsubscriptionComponent implements OnInit {
  private authId: string;

  public loading: boolean;
  public subscriptions: any[];

  constructor(private transition: Transition, private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.init();
  }

  public deleteSubscription(subscription): void {
    //todo : delete subscription
    console.log(subscription);
  }

  private init(): void {
    this.subscriptions = [];

    this.authId = this.transition.params()[PROFILE_CONSTANTS.AUTH_ID_URL_PARAM_NAME] as string;
    console.log(this.authId);

    if (this.authId !== null && this.authId !== undefined && this.authId.length > 0) {
      this.loadSubscriptions();
    } else {

    }
  }

  private loadSubscriptions(): void {
    this.startLoading();
    this.subscriptionService.GetSubscriptionsByAuthorId(this.authId)
      .subscribe(
        data => {
          this.subscriptions = data;
        },
        console.error)
      .add(() => this.stopLoading());
  }

  private startLoading(): void {
    this.loading = true;
  }

  private stopLoading(): void {
    this.loading = false;
  }
}
