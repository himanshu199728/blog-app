import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthMainComponent},
  { path: 'home', component: AppContentComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
