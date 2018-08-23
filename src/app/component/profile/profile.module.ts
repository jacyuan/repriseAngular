import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRouterModule } from '@uirouter/angular'

import { PROFILE_STATES } from './profile.states';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: PROFILE_STATES })
  ],
  declarations: [ProfileEditComponent]
})
export class ProfileModule { }
