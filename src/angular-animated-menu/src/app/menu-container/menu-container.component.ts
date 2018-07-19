import { Component, OnInit, Input } from '@angular/core';
import { MenuItemModel } from '../models/menu-item.model';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {
  private _menuItemStack: MenuItemModel[] = [];

  constructor() { }

  ngOnInit() {
    const menuJson: MenuItemModel = this.getJson('website-side-menu.data.json');
    this._menuItemStack.push(menuJson);
  }

  get canGoBack(): boolean {
    return this._menuItemStack.length > 1;
  }

  get currentMenuItem(): MenuItemModel {
    const lastItem = this._menuItemStack.slice(-1)[0];
    return lastItem;
  }

  private getJson(fileName: string) {
    // not bothering with Async, as it's local and just unit tests.
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.overrideMimeType('application/json');
    ajaxRequest.open('GET', '/assets/' + fileName, false);
    ajaxRequest.send(null);

    return JSON.parse(ajaxRequest.responseText);
  }

  private goForward(clickedMenuItem: MenuItemModel) {
    console.log(`${clickedMenuItem.title} was clicked`);
    this._menuItemStack.push(clickedMenuItem);
  }

  private goBack() {
    this._menuItemStack.pop();
  }
}
