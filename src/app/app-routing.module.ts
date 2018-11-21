import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
  { path: 'app', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
