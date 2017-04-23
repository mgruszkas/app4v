import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ItemComponent } from './item';

export enum viewMode  {
    List = 1,
    Grid = 2
}


@Component({
    selector: 'grid',
    styleUrls: ['./grid.component.scss'],
    template: `
        <section class="grid">
            <ng-content></ng-content>
        </section>
    `
})
export class GridComponent implements AfterContentInit {
    @ContentChildren(ItemComponent) public items: QueryList<ItemComponent>; 
    constructor() {
        
    }

    public ngAfterContentInit(): void {
        this.items.changes.subscribe( (items: QueryList<ItemComponent>) => {
            this.afterContentLoaded();
        });
    }

    private afterContentLoaded(): void {
        // todo later
    }
}