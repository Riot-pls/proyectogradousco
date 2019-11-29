import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NopagefoundComponent, 
    NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
