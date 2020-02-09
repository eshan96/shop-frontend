import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';

import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { UserDashboardComponent } from './customer/user-dashboard/user-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    NoAccessComponent,
    UserDashboardComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {
        path: 'admin-home', 
        component: AdminDashboardComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {path: 'no-access', component: NoAccessComponent},
      {
        path: 'user-home', 
        component: UserDashboardComponent,
        canActivate: [AuthGuard]   
      },
      {path: 'sign-up', component: SignUpComponent}
    ]
)
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
