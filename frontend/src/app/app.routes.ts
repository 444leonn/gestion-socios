import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from "./pages/home/home-page.component";
import { Deportes } from './pages/deportes/deportes-page.component';
import { Socios } from './pages/socios/socios-page.component';
import { Grupos } from './pages/grupos/grupos-page.component';
import { Tipos } from './pages/tipos/tipos-page.component';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "deportes", component: Deportes},
    {path: "socios", component: Socios},
    {path: "grupos", component: Grupos},  
    {path: "tipos", component: Tipos},
    {path: "**", redirectTo: ""}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }