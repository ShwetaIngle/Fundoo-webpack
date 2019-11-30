import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cardComponent } from './component/card/card-component';
import { LoginComponent } from './component/login/login-component';
import { RegisterComponent } from './component/register/register-component';
import { appRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule, MatInputModule, MatMenuModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        cardComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule ,
        appRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule, 
        MatMenuModule,  
        FormsModule, 
        ReactiveFormsModule,
        MatSnackBarModule,
        MatIconModule  
    ],    
    bootstrap: [AppComponent]
})
export class AppModule { }