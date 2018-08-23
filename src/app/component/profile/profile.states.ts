import { Ng2StateDeclaration } from "@uirouter/angular";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";

export const PROFILE_STATES: Ng2StateDeclaration[] = [
    {
        name: 'profileEdit',
        url: `/profile-edit`,
        component: ProfileEditComponent
    }
];
