import { Routes } from '@angular/router';

/** App components */
import { NavComponent } from './nav/nav.component';
import { StreamComponent } from './stream/stream.component';
import { BracketComponent } from './bracket/bracket.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/stream', pathMatch: 'full'}, // redirect to stream by default
    { path: 'stream', component: StreamComponent},
    { path: 'bracket', component: BracketComponent},
    { path: 'settings', component: SettingsComponent},
];
