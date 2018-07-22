import { Component, OnInit, ViewChild, ComponentFactoryResolver } from "@angular/core";
import { trigger, state, style, transition, animate, group } from "@angular/animations";

import { MenuItemModel } from "../menu-item.model";
import { MenuPageComponent } from "../menu-page/menu-page.component";
import { MenuPageHostDirective } from "../menu-page-host/menu-page-host.directive";

@Component({
    selector: "app-menu-container",
    templateUrl: "./menu-container.component.html",
    styleUrls: ["./menu-container.component.scss"],
    animations:[
      trigger('enterAnim', [
          transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate(350)
          ]),
          transition(':leave', [
            group([
              animate('0.2s ease', style({
                transform: 'translate(150px,25px)'
              })),
              animate('0.5s 0.2s ease', style({
                opacity: 0
              }))
            ])
          ])
        ])
    ]
})
export class MenuContainerComponent implements OnInit {
    private _menuItemStack: MenuItemModel[] = [];
    @ViewChild(MenuPageHostDirective) pageHost: MenuPageHostDirective;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        const menuJson: MenuItemModel = this.getJson("website-side-menu.data.json"  );
        this._menuItemStack.push(menuJson);
        this.loadPageComponent();
    }

    get canGoBack(): boolean {
        return this._menuItemStack.length > 1;
    }

    get currentMenuItem(): MenuItemModel {
        const lastItem = this._menuItemStack.slice(-1)[0];
        return lastItem;
    }

    private loadPageComponent() {
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(MenuPageComponent);
        const viewContainerRef = this.pageHost.viewContainerRef;
        //viewContainerRef.clear();

        viewContainerRef.remove(0);
        const componentRef = viewContainerRef.createComponent(componentFactory);

        const component = <MenuPageComponent>componentRef.instance;
        component.menuItem = this.currentMenuItem;
        component.isBackEnabled = this.canGoBack;
        component.menuMoreClicked.subscribe(item => {
            this.goForward(item);
        });
        component.menuBackClicked.subscribe(() => {
            this.goBack();
        });
    }

    private getJson(fileName: string) {
        // not bothering with Async, as it's local.
        const ajaxRequest = new XMLHttpRequest();
        ajaxRequest.overrideMimeType("application/json");
        ajaxRequest.open("GET", "/assets/" + fileName, false);
        ajaxRequest.send(null);

        return JSON.parse(ajaxRequest.responseText);
    }

    private goForward(clickedMenuItem: MenuItemModel): void {
        this._menuItemStack.push(clickedMenuItem);
        this.loadPageComponent();
    }

    private goBack(): void {
        this._menuItemStack.pop();
        this.loadPageComponent();
    }
}
