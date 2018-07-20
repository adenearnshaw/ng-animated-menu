import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: "[animate-element]"
})
export class AnimateDirective {
    private animateClassName = "animate";

    constructor(private renderer: Renderer2, element: ElementRef) {
        setTimeout(() => {
            renderer.addClass(element.nativeElement, this.animateClassName);
        }, 10);
    }
}
