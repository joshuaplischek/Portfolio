import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JoinComponent } from './my-projects/join/join.component';
import { SharkieComponent } from './my-projects/sharkie/sharkie.component';
import { PokeDexComponent } from './my-projects/poke-dex/poke-dex.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'join', component: JoinComponent},
    { path: 'sharkie', component: SharkieComponent},
    { path: 'pokedex', component: PokeDexComponent},
    { path: 'privacy-policy', component: PrivacyPolicyComponent},
    { path: 'legal-notice', component: LegalNoticeComponent},
];
