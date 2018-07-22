import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, group } from "@angular/animations";

import { MenuItemModel } from '../menu-item.model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  @Input() menuItem: MenuItemModel;
  @Input() isBackEnabled: boolean;
  @Output() menuMoreClicked = new EventEmitter<MenuItemModel>();
  @Output() menuBackClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  private raiseMenuMoreClicked(menuItemClicked: MenuItemModel): void {
    this.menuMoreClicked.emit(menuItemClicked);
  }

  private raiseMenuBackClicked(): void {
    this.menuBackClicked.emit();
  }
}
