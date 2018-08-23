import { Ng2StateDeclaration } from "@uirouter/angular";
import { UnsubscriptionComponent } from "./unsubscription/unsubscription.component";

export const SUBSCRIPTION_STATES: Ng2StateDeclaration[] = [
    {
        name: 'unsubscription',
        url: '/unsubscription',
        component: UnsubscriptionComponent
    }
];
