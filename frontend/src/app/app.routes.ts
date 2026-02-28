import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SportsPage } from './pages/sports/sports.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { SociosPage } from './pages/socios/socios.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'socios',
        component: SociosPage,
    },
    {
        path: 'deportes',
        component: SportsPage,
    },
    {
        path: '**',
        component: NotFoundPage,
    },
];
