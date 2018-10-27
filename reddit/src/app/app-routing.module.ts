import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { OAuthModule } from 'angular-oauth2-oidc';

const routes: Routes = [];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
  	// HttpClientModule,
  	// OAuthModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
