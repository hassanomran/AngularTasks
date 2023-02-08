import { LoginComponent } from './shared-components/Components/Login/Login/Login.component';
import { WelcomeComponent } from './shared-components/Components/welcome-page/welcome/welcome.component';
import { LoginService } from './shared-components/services/login.service';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./shared-components/Components/Nav/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        WelcomeComponent,
        LoginComponent
    ],
    providers: [LoginService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
        
    ]
})
export class AppModule { }
