import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileHomeComponent } from './profile-home/profile-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ProfileHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
