import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {PagesComponent} from "./pages/pages.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {LoginComponent} from "./login/login.component";
import {NopagefoundComponent} from "./shared/nopagefound/nopagefound.component";

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'progress', component: ProgressComponent},
      {path:'', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  {path:'login', component: LoginComponent},
  {path:'**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
