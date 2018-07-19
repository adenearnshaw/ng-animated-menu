import { Component, OnInit, Input } from '@angular/core';
import { MenuItemModel } from '../models/menu-item.model';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {
  public topLevelMenuItem: MenuItemModel;

  constructor() {}

  ngOnInit() {
    const menuJson: MenuItemModel = this.getJson('website-side-menu.data.json');
    this.topLevelMenuItem = menuJson;
  }

  private getJson(fileName: string) {
    // not bothering with Async, as it's local and just unit tests.
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.overrideMimeType('application/json');
    ajaxRequest.open('GET', '/assets/' + fileName, false);
    ajaxRequest.send(null);

    return JSON.parse(ajaxRequest.responseText);
  }

  private handleMenuItemClicked(clickedMenuItem: MenuItemModel) {
      console.log(`${clickedMenuItem.title} was clicked`);
  }
}
