import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      MenuContainerComponent,
      MenuItemComponent,
      MenuPageComponent
  ],
  exports: [
      MenuContainerComponent
  ]
})
export class MenuModule { }
