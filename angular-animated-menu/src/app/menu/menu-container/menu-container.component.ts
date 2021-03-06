import { Component, OnInit } from '@angular/core';

import { MenuItemModel } from '../models/menu-item.model';

@Component({
    selector: 'app-menu-container',
    templateUrl: './menu-container.component.html',
    styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {
    // If changing the width or duration, change the corresponding
    // variables in the related sass file too.
    private readonly _menuWidth = 270;
    private readonly _animationDuration = 300;
    private _menuItemStack: MenuItemModel[] = [];
    private _pageListOffset = 0;

    constructor() {}

    ngOnInit() {
        const menuJson: MenuItemModel = this.getJson('website-side-menu.data.json');
        this._menuItemStack.push(menuJson);
    }

    get menuItems(): MenuItemModel[] {
        return this._menuItemStack;
    }

    get pageListWidth(): string {
        return this._menuItemStack.length * this._menuWidth + 'px';
    }

    get pageListOffset(): string {
        return this._pageListOffset + 'px';
    }

    public resetMenu():void{
        this._menuItemStack.splice(1, this._menuItemStack.length -1);
        this._pageListOffset = 0;
    }

    private getJson(fileName: string) {
        // not bothering with Async, as it's local.
        const ajaxRequest = new XMLHttpRequest();
        ajaxRequest.overrideMimeType('application/json');
        ajaxRequest.open('GET', '/assets/' + fileName, false);
        ajaxRequest.send(null);
        return JSON.parse(ajaxRequest.responseText);
    }

    private goForward(clickedMenuItem: MenuItemModel): void {
        this._menuItemStack.push(clickedMenuItem);
        this._pageListOffset -= this._menuWidth;
    }

    private goBack(): void {
        this._pageListOffset += this._menuWidth;

        const timeout = this._animationDuration + 10; // Allow some leeway for animation to complete
        setTimeout(() => this._menuItemStack.pop(), timeout);
    }
}
