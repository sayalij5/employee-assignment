import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule,LayoutRoutingModule],
})
export class LayoutModule { }
