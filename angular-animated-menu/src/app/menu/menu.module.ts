import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
      MenuContainerComponent,
      MenuItemComponent,
      MenuPageComponent
  ],
  exports:[
      MenuContainerComponent
  ]
})
export class MenuModule { }
