import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective implements OnInit {

    @HostBinding('class.open') dropdownOpened = false;

    ngOnInit() {}

    @HostListener('click') toggleDropDown(eventData: Event) {
        this.dropdownOpened = !this.dropdownOpened;
    }
}
