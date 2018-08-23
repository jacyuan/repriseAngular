import { Ng2StateDeclaration } from "@uirouter/angular";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";
import { PROFILE_CONSTANTS } from "./profile.constant.ts";

export const PROFILE_STATES: Ng2StateDeclaration[] = [
    {
        name: 'profileEdit',
        url: `/profile-edit?{:${PROFILE_CONSTANTS.AUTH_ID_URL_PARAM_NAME}}`,
        component: ProfileEditComponent
    }
];
