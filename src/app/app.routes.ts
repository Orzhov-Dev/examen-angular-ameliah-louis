import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarifComponent } from './tarif/tarif.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "tarif",
        component: TarifComponent,
    }
];
