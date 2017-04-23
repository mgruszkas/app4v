import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { viewMode } from './../../components';


@Component({
    selector: 'nav',
    styleUrls: ['./sidebar.component.scss'],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    @Output() public change: EventEmitter<viewMode> = new EventEmitter<viewMode>();
    @Input() public viewMode: viewMode;
    public modes = viewMode;
    constructor() {

    }

    public setViewMode(vm: viewMode): void {
        this.viewMode = vm;
        this.change.emit(vm);
    }

    public ngOnInit(): void {
        // todo later
    }
}