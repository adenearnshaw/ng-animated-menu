webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-container></app-menu-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var menu_container_component_1 = __webpack_require__("./src/app/menu-container/menu-container.component.ts");
var menu_item_component_1 = __webpack_require__("./src/app/menu-item/menu-item.component.ts");
var menu_page_component_1 = __webpack_require__("./src/app/menu-page/menu-page.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_container_component_1.MenuContainerComponent,
                menu_item_component_1.MenuItemComponent,
                menu_page_component_1.MenuPageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/menu-container/menu-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n    <app-menu-page *ngIf=\"topLevelMenuItem\" [menuItems]=\"topLevelMenuItem.items\" (menuMoreClicked)=\"handleMenuItemClicked($event)\"></app-menu-page>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-container/menu-container.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-container/menu-container.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MenuContainerComponent = /** @class */ (function () {
    function MenuContainerComponent() {
    }
    MenuContainerComponent.prototype.ngOnInit = function () {
        var menuJson = this.getJson('website-side-menu.data.json');
        this.topLevelMenuItem = menuJson;
    };
    MenuContainerComponent.prototype.getJson = function (fileName) {
        // not bothering with Async, as it's local and just unit tests.
        var ajaxRequest = new XMLHttpRequest();
        ajaxRequest.overrideMimeType('application/json');
        ajaxRequest.open('GET', '/assets/' + fileName, false);
        ajaxRequest.send(null);
        return JSON.parse(ajaxRequest.responseText);
    };
    MenuContainerComponent.prototype.handleMenuItemClicked = function (clickedMenuItem) {
        console.log(clickedMenuItem.title + " was clicked");
    };
    MenuContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-container',
            template: __webpack_require__("./src/app/menu-container/menu-container.component.html"),
            styles: [__webpack_require__("./src/app/menu-container/menu-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuContainerComponent);
    return MenuContainerComponent;
}());
exports.MenuContainerComponent = MenuContainerComponent;


/***/ }),

/***/ "./src/app/menu-item/menu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"menuItem\" class=\"menu-item\">\n  <div class=\"menu-link\">{{menuItem.title}}</div>\n  <div class=\"menu-more\" *ngIf=\"menuItem.items?.length > 0\" (click)=\"onMoreClicked(menuItem)\">></div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-item/menu-item.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background-color: gray; }\n  .menu-item .menu-link {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding: 15px 10px; }\n  .menu-item .menu-more {\n    width: 20px;\n    padding: 15px 5px;\n    border-left: 1px solid black;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/menu-item/menu-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        this.menuMoreClicked = new core_1.EventEmitter();
    }
    MenuItemComponent.prototype.ngOnInit = function () {
        console.log(this.menuItem);
    };
    MenuItemComponent.prototype.onMoreClicked = function (menuItem) {
        if (menuItem.items.length > 0) {
            this.raiseMenuMoreClicked(menuItem);
        }
    };
    MenuItemComponent.prototype.raiseMenuMoreClicked = function (parentMenuItem) {
        this.menuMoreClicked.emit(parentMenuItem);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "menuItem", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "menuMoreClicked", void 0);
    MenuItemComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-item',
            template: __webpack_require__("./src/app/menu-item/menu-item.component.html"),
            styles: [__webpack_require__("./src/app/menu-item/menu-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());
exports.MenuItemComponent = MenuItemComponent;


/***/ }),

/***/ "./src/app/menu-page/menu-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n    <ul>\n        <li *ngFor=\"let item of menuItems\">\n            <app-menu-item [menuItem]=\"item\" (menuMoreClicked)=\"raiseMenuMoreClicked($event)\"></app-menu-item>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-page/menu-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  background-color: black;\n  color: white;\n  width: 270px; }\n  .menu-container ul {\n    padding-left: 0;\n    list-style-type: none; }\n  .menu-container ul li {\n      margin-bottom: 1px; }\n"

/***/ }),

/***/ "./src/app/menu-page/menu-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MenuPageComponent = /** @class */ (function () {
    function MenuPageComponent() {
        this.menuItems = [];
        this.menuMoreClicked = new core_1.EventEmitter();
    }
    MenuPageComponent.prototype.ngOnInit = function () { };
    MenuPageComponent.prototype.raiseMenuMoreClicked = function (menuItemClicked) {
        this.menuMoreClicked.emit(menuItemClicked);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MenuPageComponent.prototype, "menuItems", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MenuPageComponent.prototype, "menuMoreClicked", void 0);
    MenuPageComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-page',
            template: __webpack_require__("./src/app/menu-page/menu-page.component.html"),
            styles: [__webpack_require__("./src/app/menu-page/menu-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuPageComponent);
    return MenuPageComponent;
}());
exports.MenuPageComponent = MenuPageComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map