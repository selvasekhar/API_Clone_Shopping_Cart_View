import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeUsernameAutoComponent } from './change-username-auto/change-username-auto.component';
// import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SmsAppComponent } from './sms-app/sms-app.component';
import { PasswordComponent } from './password/password.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductComponent } from './product/product.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeUsernameAutoComponent,
    SmsAppComponent,
    PasswordComponent,
    UserRegisterComponent,
    AuthUserComponent,
    ShoppingcartComponent,
    ProductComponent,
    PipesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
