import { Component, OnInit } from '@angular/core';
import { Transition } from '@uirouter/core';
import { PROFILE_CONSTANTS } from '../profile.constant.ts';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  constructor(private transition: Transition) { }

  ngOnInit() {
    const authId = this.transition.params()[PROFILE_CONSTANTS.AUTH_ID_URL_PARAM_NAME];
    console.log(authId);
  }
}
