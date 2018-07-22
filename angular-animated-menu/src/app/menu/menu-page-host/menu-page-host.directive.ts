import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[menu-page-host]'
})
export class MenuPageHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
