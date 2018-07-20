import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemModel } from '../menu-item.model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  @Input() menuItems: MenuItemModel[] = [];
  @Output() menuMoreClicked = new EventEmitter<MenuItemModel>();

  constructor() {}

  ngOnInit() {}

  public raiseMenuMoreClicked(menuItemClicked: MenuItemModel) {
    this.menuMoreClicked.emit(menuItemClicked);
  }
}
