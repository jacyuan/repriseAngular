import { Ng2StateDeclaration } from "@uirouter/angular";
import { UnsubscriptionComponent } from "./unsubscription/unsubscription.component";
import { PROFILE_CONSTANTS } from "../profile/profile.constant.ts";

export const SUBSCRIPTION_STATES: Ng2StateDeclaration[] = [
    {
        name: 'unsubscription',
        url: `/unsubscription?{:${PROFILE_CONSTANTS.AUTH_ID_URL_PARAM_NAME}}`,
        component: UnsubscriptionComponent
    }
];
