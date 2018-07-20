import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    animations: [
        trigger('slideInOut',[
            state('in', style({
                transform: 'translate3d(0,0,0)'
            })),
            state('out', style({
                transform: 'translate3d(100%,0,0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ])
    ]
})
export class HomeComponent implements OnInit {
    public isMenuOpen = false;

    get currentMenuState(): string{
        return this.isMenuOpen ? 'in' : 'out';
    }

    constructor() {}

    ngOnInit() {}

    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
