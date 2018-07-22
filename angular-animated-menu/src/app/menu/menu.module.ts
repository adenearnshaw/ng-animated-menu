import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuPageHostDirective } from './menu-page-host/menu-page-host.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
      MenuContainerComponent,
      MenuItemComponent,
      MenuPageComponent,
      MenuPageHostDirective
  ],
  exports:[
      MenuContainerComponent
  ],
  entryComponents:[
      MenuPageComponent
  ]
})
export class MenuModule { }
