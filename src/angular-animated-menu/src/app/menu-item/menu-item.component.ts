import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemModel } from '../models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItemModel;
  @Output() menuMoreClicked = new EventEmitter<MenuItemModel>();

  constructor() {
  }

  ngOnInit() {
      console.log(this.menuItem);
  }

  public onMoreClicked(menuItem: MenuItemModel) {
      if (menuItem.items.length > 0) {
        this.raiseMenuMoreClicked(menuItem);
      }
  }

  private raiseMenuMoreClicked(parentMenuItem: MenuItemModel) {
      this.menuMoreClicked.emit(parentMenuItem);
  }
}
