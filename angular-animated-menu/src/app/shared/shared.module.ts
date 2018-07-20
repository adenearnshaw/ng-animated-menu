import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateDirective } from './directives/animate.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      AnimateDirective
  ],
  exports:[
      AnimateDirective
  ]
})
export class SharedModule { }
