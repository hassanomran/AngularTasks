import { AppComponent } from './app.component';
import { LoginComponent } from './shared-components/Components/Login/Login/Login.component';
import { NavbarComponent } from './shared-components/Components/Nav/navbar/navbar.component';
import { WelcomeComponent } from './shared-components/Components/welcome-page/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
