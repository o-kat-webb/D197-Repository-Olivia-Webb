import { Routes } from '@angular/router';
import { MapComponent } from './map/map';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MapComponent }
];
